import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_PATH = path.join(process.cwd(), 'posts')

export type PostMeta = {
  title: string
  date: string
  category: string
  slug: string
  lang: string
  excerpt?: string
  content?: string
  youtubeId?: string
}

export async function getAllPosts(lang: string): Promise<PostMeta[]>{
  const dir = path.join(POSTS_PATH, lang)
  if(!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))
  const posts = files.map(f => {
    const raw = fs.readFileSync(path.join(dir,f), 'utf-8')
    const { data, content } = matter(raw)
    const youtubeRaw = (data.youtube as string) || (data.youtubeId as string) || null
    const youtubeId = extractYouTubeId(youtubeRaw)
    return {
      title: data.title || '',
      date: data.date || '',
      category: data.category || '',
      slug: data.slug || f.replace(/\.md$/, ''),
      lang: data.lang || lang,
      excerpt: (content || '').split('\n').find(Boolean) || '',
      content: content || '',
      youtubeId: youtubeId
    }
  })
  // sort by date desc
  posts.sort((a,b) => (a.date < b.date ? 1 : -1))
  return posts
}

export async function getPostBySlug(lang: string, slug: string): Promise<PostMeta | null>{
  const file = path.join(POSTS_PATH, lang, `${slug}.md`)
  if(!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf-8')
  const { data, content } = matter(raw)
  const youtubeRaw = (data.youtube as string) || (data.youtubeId as string) || null
  const youtubeId = extractYouTubeId(youtubeRaw)
  return {
    title: data.title || '',
    date: data.date || '',
    category: data.category || '',
    slug: data.slug || slug,
    lang: data.lang || lang,
    excerpt: (content || '').split('\n').find(Boolean) || '',
    content: content || '',
    youtubeId: youtubeId
  }
}

function extractYouTubeId(raw: string | null | undefined): string | null {
  if (!raw) return null
  // if it's already an id
  if (/^[A-Za-z0-9_-]{6,}$/.test(raw)) return raw
  try {
    const u = new URL(raw)
    // common patterns: /watch?v=ID, /embed/ID, /live/ID, youtu.be/ID
    if (u.hostname.includes('youtu.be')) {
      return u.pathname.slice(1) || null
    }
    if (u.searchParams.has('v')) return u.searchParams.get('v')
    const parts = u.pathname.split('/')
    const last = parts.pop() || ''
    if (last) return last
  } catch {
    // not a valid URL, fallthrough
  }
  return null
}

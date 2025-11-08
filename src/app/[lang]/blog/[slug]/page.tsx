import React from 'react'
import { getPostBySlug, getAllPosts } from '../../../../lib/getPosts'
import YouTube from '../../../../components/YouTube'
import { remark } from 'remark'
import html from 'remark-html'

export default async function PostPage({ params }: { params: { lang: string, slug: string } }){
  const { lang, slug } = params
  const post = await getPostBySlug(lang, slug)
  if(!post) return <div>Not found</div>

  // convert markdown to HTML (simple)
  const processed = await remark().use(html).process(post.content)
  const contentHtml = processed.toString()

  return (
    <article className="card">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <p className="text-sm text-muted">{post.date} • {post.category}</p>
      <div className="prose mt-4" dangerouslySetInnerHTML={{ __html: contentHtml }} />

      {/* Sample embedded video usage - if post contains video id you can pass it */}
      <div className="mt-6">
        <YouTube id={post.youtubeId || ''} />
      </div>
    </article>
  )
}

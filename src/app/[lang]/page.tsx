import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../../lib/getPosts'
import JourneyTimeline from '../../components/JourneyTimeline'

export default async function Home({ params }: { params: { lang: string } }){
  const lang = params.lang || 'pt'
  const posts = await getAllPosts(lang)
  const recent = posts.slice(0,3)

  return (
      <div>
      <div className="card mb-6">
        <h1 className="text-3xl font-semibold">{lang === 'pt' ? 'Tamie Integrativa' : 'Tamie Integrative'}</h1>
        <p className="mt-2 text-muted">{lang === 'pt' ? 'Blog sobre autoconhecimento e terapias integrativas' : 'A blog about self-awareness and integrative therapies'}</p>
        <div className="mt-4">
          <Link href={`/${lang}/blog`} className="text-tamie-green font-medium">{lang === 'pt' ? 'Ver posts' : 'See posts'}</Link>
          <span className="mx-2">•</span>
          <Link href={`/${lang}/jornada`} className="text-tamie-green font-medium">{lang === 'pt' ? 'Jornada' : 'Journey'}</Link>
          <span className="mx-2">•</span>
          <Link href={`/${lang}/recomendacoes`} className="text-tamie-green font-medium">{lang === 'pt' ? 'Recomendações' : 'Recommendations'}</Link>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">{lang === 'pt' ? 'Posts Recentes' : 'Recent Posts'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {recent.map(p => (
            <article key={p.slug} className="card">
              <h3 className="font-medium text-lg">{p.title}</h3>
              <p className="text-sm text-muted">{p.date} • {p.category}</p>
              <div className="mt-2">
                <Link href={`/${lang}/blog/${p.slug}`} className="text-tamie-green">{lang === 'pt' ? 'Ler' : 'Read'}</Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">{lang === 'pt' ? 'Minha Jornada' : 'My Journey'}</h2>
        <div className="card">
          <JourneyTimeline lang={lang} />
        </div>
      </div>
      </div>
  )
}

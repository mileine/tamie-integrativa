import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../../../lib/getPosts'
import SearchBar from '../../../components/SearchBar'

export default async function BlogPage({ params }: { params: { lang: string } }) {
  const lang = params.lang || 'pt'
  const posts = await getAllPosts(lang)

  return (
    <div>
    <h1 className="text-3xl font-semibold mb-4">{lang === 'pt' ? 'Blog' : 'Blog'}</h1>
    <SearchBar posts={posts} lang={lang} />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {posts.map((p) => (
          <article key={p.slug} className="card">
            <h3 className="font-medium text-lg">{p.title}</h3>
            <p className="text-sm text-muted">{p.date} • {p.category}</p>
            <p className="mt-2 text-sm">{p.excerpt}</p>
            <div className="mt-2">
              <Link href={`/${lang}/blog/${p.slug}`} className="text-tamie-green hover:underline">
                {lang === 'pt' ? 'Ler' : 'Read'}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

'use client'
import React, { useState } from 'react'
import Link from 'next/link'

type PostMeta = { title: string; slug: string; date: string; category: string }

export default function SearchBar({ posts, lang }: { posts: PostMeta[]; lang: string }){
  const [q, setQ] = useState('')
  const results = posts.filter(p => {
    const low = q.toLowerCase()
    return (
      p.title.toLowerCase().includes(low) ||
      p.category.toLowerCase().includes(low) ||
      p.slug.toLowerCase().includes(low)
    )
  })

  return (
    <div className="max-w-2xl mx-auto">
      <input 
        value={q} 
        onChange={e => setQ(e.target.value)} 
        placeholder={lang === 'pt' ? 'Buscar por título ou categoria...' : 'Search by title or category...'} 
        className="w-full p-3 rounded border text-base font-body focus:outline-none focus:ring-2 focus:ring-tamie-green/20 transition-shadow"
      />
      {q && (
        <div className="mt-4 bg-white rounded-lg shadow-sm p-4">
          <p className="text-sm text-muted mb-3 font-body">{results.length} {lang === 'pt' ? 'resultado(s)' : 'result(s)'}</p>
          <ul className="space-y-4">
            {results.map(r => (
              <li key={r.slug} className="border-b pb-4 last:border-b-0 last:pb-0">
                <Link href={`/${lang}/blog/${r.slug}`} className="text-tamie-green hover:underline font-handwritten text-lg">
                  {r.title}
                </Link>
                <div className="text-sm text-muted mt-1 font-body">{r.date} • {r.category}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

import React from 'react'

export default function Contato({ params }: { params: { lang: string } }){
  const lang = params.lang || 'pt'
  return (
     <div>
      <h1 className="text-3xl font-semibold mb-4">{lang === 'pt' ? 'Contato' : 'Contact'}</h1>
      <div className="card">
        <p>{lang === 'pt' ? 'Escreva para: tamie@example.com' : 'Write to: tamie@example.com'}</p>
      </div>
     </div>
  )
}

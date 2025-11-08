import React from 'react'

export default function Sobre({ params }: { params: { lang: string } }){
  const lang = params.lang || 'pt'
  return (
     <div>
      <h1 className="text-3xl font-semibold mb-4">{lang === 'pt' ? 'Sobre' : 'About'}</h1>
      <div className="card">
        <p>{lang === 'pt' ? 'Breve texto sobre Tamie e a proposta do blog.' : 'Short text about Tamie and the blog mission.'}</p>
      </div>
     </div>
  )
}


import React from 'react'
import dataPt from '../../../data/recommendations.json'
import dataEn from '../../../data/recommendations_en.json'
import { sanitizeRecData, RecData } from '../../../lib/validateRecommendations'

export default function Recomendacoes({ params }: { params: { lang: string } }){
  const lang = params.lang || 'pt'
  const raw = lang === 'pt' ? dataPt : dataEn
  const data = sanitizeRecData(raw) as RecData

  return (
      <div>
      <h1 className="text-3xl font-semibold mb-4">{lang === 'pt' ? 'Recomendações' : 'Recommendations'}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {Object.entries(data).map(([type, items]) => (
          <div key={type} className="card">
            <h3 className="font-medium text-lg capitalize">{type}</h3>
            <ul className="mt-2 list-disc pl-5">
              {items.map((i, idx) => (
                <li key={idx}>
                  <strong>{i.title}</strong>
                  {i.author ? ` — ${i.author}` : ''}
                  {i.link ? ` — ` : ''}
                  {i.link ? <a href={i.link} className="text-tamie-green">link</a> : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
  )
}

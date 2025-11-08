import React from 'react'
import JourneyTimeline from '../../../components/JourneyTimeline'

export default function Jornada({ params }: { params: { lang: string } }){
  const lang = params.lang || 'pt'
  return (
     <div>
      <h1 className="text-3xl font-semibold mb-4">{lang === 'pt' ? 'Jornada' : 'Journey'}</h1>
      <div className="card">
        <JourneyTimeline lang={lang} />
      </div>
     </div>
  )
}

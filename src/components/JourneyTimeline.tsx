import React from 'react'
import { getJourneySteps } from '../lib/getJourneySteps'

export default function JourneyTimeline({ lang }: { lang: string }){
  const steps = getJourneySteps(lang)
  return (
    <ol className="space-y-4">
      {steps.map((s) => (
        <li key={s.year} className="flex gap-4 items-start">
          <div className="w-20 text-sm font-medium">{s.year}</div>
          <div className="flex-1">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-sm text-muted">{s.description}</p>
            {s.highlights && (
              <ul className="mt-2 list-disc pl-5 text-sm">
                {s.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}

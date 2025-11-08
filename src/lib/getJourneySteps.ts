import journeyPt from '../data/journeyTimeline'
import journeyEn from '../data/journeyTimeline_en'

export type Step = {
  year: string
  title: string
  description: string
  highlights?: string[]
}

export function getJourneySteps(lang: string): Step[]{
  return lang === 'pt' ? journeyPt : journeyEn
}

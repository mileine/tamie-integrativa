export type RecItem = { title?: string; author?: string; link?: string }
export type RecData = Record<string, RecItem[]>

export function isRecData(x: unknown): x is RecData {
  if (typeof x !== 'object' || x === null) return false
  for (const [k, v] of Object.entries(x as any)) {
    if (!Array.isArray(v)) return false
    for (const item of v) {
      if (typeof item !== 'object' || item === null) return false
      if ('title' in item && typeof (item as any).title !== 'string') return false
      if ('author' in item && typeof (item as any).author !== 'string') return false
      if ('link' in item && typeof (item as any).link !== 'string') return false
    }
  }
  return true
}

export function sanitizeRecData(x: unknown): RecData {
  if (isRecData(x)) return x
  // fallback to empty structure
  return {}
}

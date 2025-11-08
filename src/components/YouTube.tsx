'use client'
import React from 'react'

export default function YouTube({ id }: { id: string }){
  if(!id) return null
  const src = `https://www.youtube.com/embed/${id}`
  return (
    <div className="w-full h-64 md:h-96">
      <iframe className="w-full h-full rounded" src={src} title="YouTube video" frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

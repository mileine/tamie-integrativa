import '../styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'Tamie Integrativa',
  description: 'Blog sobre autoconhecimento e terapias integrativas'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  )
}

import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../styles/globals.css'

export default function LangLayout({ children, params }: { children: React.ReactNode, params: { lang: string } }){
  const { lang } = params
  return (
    <html lang={lang}>
      <body>
        <Header lang={lang} />
        <main className="container py-4 sm:py-6 md:py-8">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  )
}

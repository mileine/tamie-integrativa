'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'

export default function Header({ lang }: { lang: string }){
  const pathname = usePathname() || '/'
  const other = lang === 'pt' ? 'en' : 'pt'
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  // preserve current path when toggling language
  let togglePath = `/${other}`
  if (pathname === '/' || pathname === '') {
    togglePath = `/${other}`
  } else if (pathname.startsWith(`/${lang}`)) {
    togglePath = pathname.replace(`/${lang}`, `/${other}`)
  } else {
    togglePath = `/${other}${pathname}`
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <div>
          <Link href={`/${lang}`} className="text-xl font-semibold text-tamie-green">Tamie Integrativa</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 items-center">
          <Link href={`/${lang}/blog`} className="text-sm font-handwritten hover:text-tamie-green transition-colors">{lang === 'pt' ? 'Blog' : 'Blog'}</Link>
          <Link href={`/${lang}/jornada`} className="text-sm font-handwritten hover:text-tamie-green transition-colors">{lang === 'pt' ? 'Jornada' : 'Journey'}</Link>
          <Link href={`/${lang}/recomendacoes`} className="text-sm font-handwritten hover:text-tamie-green transition-colors">{lang === 'pt' ? 'Recomendações' : 'Recommendations'}</Link>
          <Link href={`/${lang}/sobre`} className="text-sm font-handwritten hover:text-tamie-green transition-colors">{lang === 'pt' ? 'Sobre' : 'About'}</Link>
          <Link href={`/${lang}/contato`} className="text-sm font-handwritten hover:text-tamie-green transition-colors">{lang === 'pt' ? 'Contato' : 'Contact'}</Link>

          {/* Language toggle - preserves current route */}
          <Link href={togglePath} aria-label={other === 'pt' ? 'Mudar para português' : 'Switch to English'}>
            <button className="text-sm px-3 py-1 border rounded bg-tamie-beige hover:bg-tamie-lilac transition-colors">
              {other.toUpperCase()}
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(true)} 
          className="p-2 md:hidden"
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        
        {/* Mobile Menu */}
        <MobileMenu 
          lang={lang}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          togglePath={togglePath}
        />
      </div>
    </header>
  )
}

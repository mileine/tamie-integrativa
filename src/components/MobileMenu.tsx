import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  lang: string
  isOpen: boolean
  onClose: () => void
  togglePath: string
}

export default function MobileMenu({ lang, isOpen, onClose, togglePath }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed inset-0 bg-white z-50 md:hidden"
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href={`/${lang}`} onClick={onClose} className="text-xl font-semibold text-tamie-green">
                Tamie Integrativa
              </Link>
              <button onClick={onClose} className="p-2" aria-label="Close menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              <Link href={`/${lang}/blog`} onClick={onClose} className="text-lg font-handwritten">
                {lang === 'pt' ? 'Blog' : 'Blog'}
              </Link>
              <Link href={`/${lang}/jornada`} onClick={onClose} className="text-lg font-handwritten">
                {lang === 'pt' ? 'Jornada' : 'Journey'}
              </Link>
              <Link href={`/${lang}/recomendacoes`} onClick={onClose} className="text-lg font-handwritten">
                {lang === 'pt' ? 'Recomendações' : 'Recommendations'}
              </Link>
              <Link href={`/${lang}/sobre`} onClick={onClose} className="text-lg font-handwritten">
                {lang === 'pt' ? 'Sobre' : 'About'}
              </Link>
              <Link href={`/${lang}/contato`} onClick={onClose} className="text-lg font-handwritten">
                {lang === 'pt' ? 'Contato' : 'Contact'}
              </Link>
              
              <Link href={togglePath} onClick={onClose} className="mt-4">
                <button className="w-full text-lg px-4 py-2 border rounded bg-tamie-beige">
                  {(lang === 'pt' ? 'EN' : 'PT')}
                </button>
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
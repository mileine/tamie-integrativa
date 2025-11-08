import React from 'react'

export default function Footer({ lang }: { lang: string }){
  return (
    <footer className="mt-12 py-6 text-center text-sm text-muted">
      <div className="container">
        <p>{lang === 'pt' ? '© 2025 Tamie Integrativa. Todos os direitos reservados.' : '© 2025 Tamie Integrative. All rights reserved.'}</p>
      </div>
    </footer>
  )
}

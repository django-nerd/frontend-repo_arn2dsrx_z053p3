import React, { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import CTA from './components/CTA'

function App() {
  const [lang, setLang] = useState('gr') // 'gr' | 'en'

  const t = {
    gr: `© ${new Date().getFullYear()} Τζάκια • Εγκαταστάσεις — Όλα τα δικαιώματα διατηρούνται.`,
    en: `© ${new Date().getFullYear()} Fireplaces • Installations — All rights reserved.`
  }

  return (
    <div className="min-h-screen bg-black">
      <Hero logoUrl="/logo.png" lang={lang} setLang={setLang} />
      <Features lang={lang} />
      <Gallery lang={lang} />
      <CTA lang={lang} />
      <footer className="py-10 text-center text-emerald-200/70 bg-black border-t border-emerald-900/40">
        {t[lang]}
      </footer>
    </div>
  )
}

export default App

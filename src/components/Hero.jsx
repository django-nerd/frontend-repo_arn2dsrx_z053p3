import React from 'react'
import { Menu } from 'lucide-react'
import Flame from './Flame'

const Hero = ({ logoUrl, lang = 'gr', setLang }) => {
  const nav = {
    gr: ['Αρχική', 'Υπηρεσίες', 'Ενεργειακά', 'Έργα', 'Επικοινωνία'],
    en: ['Home', 'Services', 'Energy', 'Projects', 'Contact']
  }
  const title = {
    gr: <>Θερμή άνεση, <span className="text-emerald-300">με ασφάλεια</span> και στυλ</>,
    en: <>Warm comfort, <span className="text-emerald-300">with safety</span> and style</>
  }
  const subtitle = {
    gr: 'Οικογενειακή επιχείρηση ειδική στην επιλογή και εγκατάσταση ενεργειακών τζακιών, επενδύσεων και καμινάδων. Ποιότητα, συνέπεια και καθαρή δουλειά.',
    en: 'Family business specialized in selecting and installing energy fireplaces, claddings and chimneys. Quality, reliability and clean workmanship.'
  }
  const cta1 = { gr: 'Δες υπηρεσίες', en: 'See services' }
  const cta2 = { gr: 'Ζήτα προσφορά', en: 'Get a quote' }

  return (
    <header className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900 via-emerald-950 to-black" />
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage:
          'radial-gradient(800px 300px at 10% 10%, rgba(255,255,255,0.15), transparent), radial-gradient(600px 200px at 70% 0%, rgba(255,255,255,0.1), transparent)'
      }} />

      <nav className="relative z-10 max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {logoUrl ? (
            <div className="relative inline-flex items-center justify-center">
              <img src={logoUrl} alt="Λογότυπο" className="h-10 w-auto object-contain animate-bounce-gentle" />
              <span className="absolute inset-0 rounded-full blur-md opacity-60 pointer-events-none" />
            </div>
          ) : (
            <div className="h-10 w-10 rounded-full bg-emerald-700/40 border border-emerald-500/40" />
          )}
          <span className="text-emerald-100 font-semibold tracking-wide">ΤΖΑΚΙΑ • ΕΓΚΑΤΑΣΤΑΣΕΙΣ</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-emerald-100/80 hover:text-white md:hidden">
            <Menu />
          </button>
          <ul className="hidden md:flex items-center gap-8 text-emerald-100/90">
            {nav[lang].map((label, i) => (
              <li key={i} className="hover:text-white cursor-pointer">{label}</li>
            ))}
          </ul>
          <div className="ml-4 hidden md:flex items-center gap-2 text-xs font-semibold">
            <button onClick={() => setLang && setLang('gr')} className={`px-2 py-1 rounded ${lang==='gr' ? 'bg-emerald-600 text-white' : 'text-emerald-100/80 hover:text-white border border-emerald-700/40'}`}>GR</button>
            <button onClick={() => setLang && setLang('en')} className={`px-2 py-1 rounded ${lang==='en' ? 'bg-emerald-600 text-white' : 'text-emerald-100/80 hover:text-white border border-emerald-700/40'}`}>EN</button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            {title[lang]}
          </h1>
          <p className="mt-5 text-emerald-100/90 text-lg">
            {subtitle[lang]}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition">{cta1[lang]}</a>
            <a href="#contact" className="px-5 py-3 border border-emerald-500/60 text-emerald-100 hover:bg-emerald-800/40 rounded-lg transition">{cta2[lang]}</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end animate-sway">
          <div className="animate-glow rounded-full">
            <Flame size={160} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero

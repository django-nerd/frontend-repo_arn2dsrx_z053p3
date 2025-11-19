import React from 'react'
import { Menu } from 'lucide-react'
import Flame from './Flame'

const Hero = ({ logoUrl }) => {
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
            <img src={logoUrl} alt="Λογότυπο" className="h-10 w-auto object-contain" />
          ) : (
            <div className="h-10 w-10 rounded-full bg-emerald-700/40 border border-emerald-500/40" />
          )}
          <span className="text-emerald-100 font-semibold tracking-wide">ΤΖΑΚΙΑ • ΕΓΚΑΤΑΣΤΑΣΕΙΣ</span>
        </div>
        <button className="text-emerald-100/80 hover:text-white md:hidden">
          <Menu />
        </button>
        <ul className="hidden md:flex items-center gap-8 text-emerald-100/90">
          <li className="hover:text-white cursor-pointer">Αρχική</li>
          <li className="hover:text-white cursor-pointer">Υπηρεσίες</li>
          <li className="hover:text-white cursor-pointer">Ενεργειακά</li>
          <li className="hover:text-white cursor-pointer">Έργα</li>
          <li className="hover:text-white cursor-pointer">Επικοινωνία</li>
        </ul>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Θερμή άνεση, <span className="text-emerald-300">με ασφάλεια</span> και στυλ
          </h1>
          <p className="mt-5 text-emerald-100/90 text-lg">
            Μικρή οικογενειακή επιχείρηση με ειδίκευση στην επιλογή και εγκατάσταση
            ενεργειακών τζακιών, επενδύσεων και καμινάδων. Ποιότητα, συνέπεια και καθαρή δουλειά.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition">Δες υπηρεσίες</a>
            <a href="#contact" className="px-5 py-3 border border-emerald-500/60 text-emerald-100 hover:bg-emerald-800/40 rounded-lg transition">Ζήτα προσφορά</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Flame size={160} />
        </div>
      </div>
    </header>
  )
}

export default Hero

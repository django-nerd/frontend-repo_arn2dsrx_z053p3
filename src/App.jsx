import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero logoUrl="/logo.png" />
      <Features />
      <Gallery />
      <CTA />
      <footer className="py-10 text-center text-emerald-200/70 bg-black border-t border-emerald-900/40">
        © {new Date().getFullYear()} Τζάκια • Εγκαταστάσεις — Όλα τα δικαιώματα διατηρούνται.
      </footer>
    </div>
  )
}

export default App

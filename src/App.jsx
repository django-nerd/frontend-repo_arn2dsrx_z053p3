import React, { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import CTA from './components/CTA'

function App() {
  const [lang, setLang] = useState('gr') // 'gr' | 'en'

  // Instagram sources provided by user
  const instagramLogo = 'https://instagram.fath3-4.fna.fbcdn.net/v/t51.2885-19/143982824_979718099224003_419858178171415535_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fath3-4.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QGQIyq-Lplxy3aEDJuz4O65ywHGuSheM32nqHrBzCQNCrcGycqAYa5Ky9MNjN87vDuh5TfwT5tRSdHAcqdAaVXE&_nc_ohc=oFXMMI54p0AQ7kNvwFNSwqm&_nc_gid=gDt2U7Sijg6FRp2_LJbu0g&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfjLE2ARNLKLILmMiCscWxm-DIKqF6DvvqstgabORMDL9w&oe=692381AC&_nc_sid=22de04'

  // We use provided post URLs as outbound links; images will be swapped to real IG media when available
  const slides = [
    {
      title: { gr: 'Εγκατάσταση τζακιού', en: 'Fireplace installation' },
      img: 'https://images.unsplash.com/photo-1600210491891-094dedcc9c33?q=80&w=1600&auto=format&fit=crop',
      href: 'https://www.instagram.com/oikomorfi/p/DOhNSI_DCD6/'
    },
    {
      title: { gr: 'Σύγχρονη επένδυση', en: 'Contemporary cladding' },
      img: 'https://images.unsplash.com/photo-1542979915-ef339c5ee682?q=80&w=1600&auto=format&fit=crop',
      href: 'https://www.instagram.com/oikomorfi/p/DObztqnDZCl/'
    },
    {
      title: { gr: 'Ενεργειακό σύστημα', en: 'Energy system' },
      img: 'https://images.unsplash.com/photo-1615870216515-4f713bd1d9f1?q=80&w=1600&auto=format&fit=crop',
      href: 'https://www.instagram.com/oikomorfi/p/C2NkCcErL6s/'
    },
    {
      title: { gr: 'Έργο κατοικίας', en: 'Residential project' },
      img: 'https://images.unsplash.com/photo-1616593960532-168d0df22151?q=80&w=1600&auto=format&fit=crop',
      href: 'https://www.instagram.com/oikomorfi/p/CPJCGDVM8pC/'
    },
    {
      title: { gr: 'Καμινάδα & φινίρισμα', en: 'Chimney & finishing' },
      img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1600&auto=format&fit=crop',
      href: 'https://www.instagram.com/oikomorfi/p/CMfgvhRsqz1/'
    }
  ]

  const t = {
    gr: `© ${new Date().getFullYear()} Τζάκια • Εγκαταστάσεις — Όλα τα δικαιώματα διατηρούνται.`,
    en: `© ${new Date().getFullYear()} Fireplaces • Installations — All rights reserved.`
  }

  return (
    <div className="min-h-screen bg-black">
      <Hero logoUrl={instagramLogo || '/logo.png'} lang={lang} setLang={setLang} />
      <Features lang={lang} />
      <Gallery lang={lang} items={slides} />
      <CTA lang={lang} />
      <footer className="py-10 text-center text-emerald-200/70 bg-black border-t border-emerald-900/40">
        {t[lang]}
      </footer>
    </div>
  )
}

export default App

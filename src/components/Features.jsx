import React from 'react'
import { Flame as FlameIcon, Hammer, Shield, Leaf } from 'lucide-react'
import SoftTiltCard from './SoftTiltCard'

const FeatureCard = ({ icon: Icon, title, text }) => (
  <SoftTiltCard className="p-6">
    <div className="w-10 h-10 rounded-lg bg-emerald-700/40 flex items-center justify-center text-emerald-200">
      <Icon size={20} />
    </div>
    <h3 className="mt-4 text-white font-semibold">{title}</h3>
    <p className="mt-2 text-emerald-100/85 text-sm leading-relaxed">{text}</p>
  </SoftTiltCard>
)

const Features = ({ lang = 'gr' }) => {
  const list = {
    gr: [
      { icon: FlameIcon, title: 'Ενεργειακά τζάκια', text: 'Σύγχρονες λύσεις υψηλής απόδοσης, με σωστή μελέτη χώρου και ασφαλή εγκατάσταση.' },
      { icon: Hammer, title: 'Επενδύσεις & επεμβάσεις', text: 'Κατασκευές από μάρμαρο, πέτρα ή γυψοσανίδα και αναβαθμίσεις παλιών τζακιών.' },
      { icon: Shield, title: 'Ασφάλεια & κανονισμοί', text: 'Τήρηση προδιαγραφών, σωστή καμινάδα και υλικά αντοχής για ξέγνοιαστη χρήση.' },
      { icon: Leaf, title: 'Οικολογική προσέγγιση', text: 'Επιλογές με χαμηλές εκπομπές και καλύτερη καύση, για καθαρότερο περιβάλλον.' }
    ],
    en: [
      { icon: FlameIcon, title: 'Energy fireplaces', text: 'Modern, high‑efficiency solutions with proper space study and safe installation.' },
      { icon: Hammer, title: 'Cladding & refurbishments', text: 'Marble, stone or drywall constructions and upgrades of old fireplaces.' },
      { icon: Shield, title: 'Safety & regulations', text: 'Compliance with standards, proper chimney and heat‑resistant materials for peace of mind.' },
      { icon: Leaf, title: 'Eco approach', text: 'Options with low emissions and better combustion for a cleaner environment.' }
    ]
  }
  const copy = {
    gr: {
      heading: 'Τι προσφέρουμε',
      sub: 'Βασικές κατηγορίες εργασιών για να διαλέξεις αυτό που ταιριάζει στον χώρο σου.'
    },
    en: {
      heading: 'What we offer',
      sub: 'Core service categories to help you choose what fits your space.'
    }
  }

  return (
    <section id="services" className="relative py-16 md:py-24 bg-gradient-to-b from-black via-emerald-950 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-white font-bold">{copy[lang].heading}</h2>
        <p className="mt-3 text-emerald-100/80">{copy[lang].sub}</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {list[lang].map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

import React from 'react'
import { Flame, Hammer, Shield, Leaf } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, text }) => (
  <div className="p-6 rounded-2xl bg-emerald-900/30 border border-emerald-700/30 hover:border-emerald-500/40 transition">
    <div className="w-10 h-10 rounded-lg bg-emerald-700/40 flex items-center justify-center text-emerald-200">
      <Icon size={20} />
    </div>
    <h3 className="mt-4 text-white font-semibold">{title}</h3>
    <p className="mt-2 text-emerald-100/85 text-sm leading-relaxed">{text}</p>
  </div>
)

const Features = () => {
  const list = [
    { icon: Flame, title: 'Ενεργειακά τζάκια', text: 'Σύγχρονες λύσεις υψηλής απόδοσης, με σωστή μελέτη χώρου και ασφαλή εγκατάσταση.' },
    { icon: Hammer, title: 'Επενδύσεις & επεμβάσεις', text: 'Κατασκευές από μάρμαρο, πέτρα ή γυψοσανίδα και αναβαθμίσεις παλιών τζακιών.' },
    { icon: Shield, title: 'Ασφάλεια & κανονισμοί', text: 'Τήρηση προδιαγραφών, σωστή καμινάδα και υλικά αντοχής για ξέγνοιαστη χρήση.' },
    { icon: Leaf, title: 'Οικολογική προσέγγιση', text: 'Επιλογές με χαμηλές εκπομπές και καλύτερη καύση, για καθαρότερο περιβάλλον.' },
  ]
  return (
    <section id="services" className="relative py-16 md:py-24 bg-gradient-to-b from-black via-emerald-950 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-white font-bold">Τι προσφέρουμε</h2>
        <p className="mt-3 text-emerald-100/80">Βασικές κατηγορίες εργασιών για να διαλέξεις αυτό που ταιριάζει στον χώρο σου.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

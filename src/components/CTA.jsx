import React from 'react'

const CTA = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-black via-emerald-950 to-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl text-white font-bold">Θέλεις να μιλήσουμε;</h2>
        <p className="mt-3 text-emerald-100/85">Τηλέφωνο: 69Χ ΧΧΧ ΧΧΧΧ • Email: example@company.gr</p>
        <form className="mt-8 grid md:grid-cols-3 gap-3 text-left">
          <input type="text" placeholder="Όνομα" className="px-4 py-3 rounded-lg bg-emerald-900/30 border border-emerald-700/40 text-emerald-100 placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-600" />
          <input type="tel" placeholder="Τηλέφωνο" className="px-4 py-3 rounded-lg bg-emerald-900/30 border border-emerald-700/40 text-emerald-100 placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-600" />
          <button className="px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white">Κλείσε ραντεβού</button>
        </form>
        <p className="mt-3 text-emerald-400/80 text-sm">Ή κάλεσε μας απευθείας για άμεση εξυπηρέτηση.</p>
      </div>
    </section>
  )
}

export default CTA

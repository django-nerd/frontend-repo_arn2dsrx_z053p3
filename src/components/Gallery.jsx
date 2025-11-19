import React from 'react'

const items = [
  { title: 'Τζάκι γωνιακό', img: 'https://images.unsplash.com/photo-1600210491891-094dedcc9c33?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Μοντέρνα επένδυση', img: 'https://images.unsplash.com/photo-1542979915-ef339c5ee682?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Καμινάδα inox', img: 'https://images.unsplash.com/photo-1616593960532-168d0df22151?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Ενεργειακή κασέτα', img: 'https://images.unsplash.com/photo-1615870216515-4f713bd1d9f1?q=80&w=1400&auto=format&fit=crop' },
]

const Gallery = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl text-white font-bold">Δουλειές μας</h2>
            <p className="mt-3 text-emerald-100/80">Μικρό δείγμα από εγκαταστάσεις και επενδύσεις.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition">Ζήτα εκτίμηση</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-2xl border border-emerald-800/30">
              <img src={it.img} alt={it.title} className="h-56 w-full object-cover group-hover:scale-105 transition" />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 flex items-end">
                <span className="text-white font-medium">{it.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

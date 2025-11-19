import React, { useEffect, useMemo, useState } from 'react'

// Default placeholders (replace via props)
const itemsDefault = [
  { title: { gr: 'Τζάκι γωνιακό', en: 'Corner fireplace' }, img: 'https://images.unsplash.com/photo-1600210491891-094dedcc9c33?q=80&w=1600&auto=format&fit=crop' },
  { title: { gr: 'Μοντέρνα επένδυση', en: 'Modern cladding' }, img: 'https://images.unsplash.com/photo-1542979915-ef339c5ee682?q=80&w=1600&auto=format&fit=crop' },
  { title: { gr: 'Καμινάδα inox', en: 'Inox chimney' }, img: 'https://images.unsplash.com/photo-1616593960532-168d0df22151?q=80&w=1600&auto=format&fit=crop' },
  { title: { gr: 'Ενεργειακή κασέτα', en: 'Energy insert' }, img: 'https://images.unsplash.com/photo-1615870216515-4f713bd1d9f1?q=80&w=1600&auto=format&fit=crop' },
]

const Gallery = ({ lang = 'gr', items = itemsDefault }) => {
  const slides = useMemo(() => items.filter(Boolean), [items])
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (slides.length <= 1) return
    const t = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length)
        setFading(false)
      }, 400)
    }, 6000)
    return () => clearInterval(t)
  }, [slides.length])

  if (!slides.length) return null

  return (
    <section className="relative py-16 md:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl text-white font-extrabold tracking-tight">{lang === 'gr' ? 'Δουλειές μας' : 'Our work'}</h2>
            <p className="mt-3 text-emerald-100/80">{lang === 'gr' ? 'Ενδεικτικό slideshow από εγκαταστάσεις και επενδύσεις.' : 'Showcase slideshow of installations and claddings.'}</p>
          </div>
          <a href="#contact" className="hidden md:inline-block px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition">{lang==='gr' ? 'Ζήτα εκτίμηση' : 'Request estimate'}</a>
        </div>
      </div>

      <div className="mt-8 relative max-w-6xl mx-auto px-6">
        {/* Slide frame */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-emerald-800/30 bg-emerald-900/10">
          {slides.map((s, i) => (
            <a
              key={i}
              className={`absolute inset-0 transition-opacity duration-500 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              href={s.href || '#'}
              target={s.href ? '_blank' : undefined}
              rel={s.href ? 'noreferrer' : undefined}
            >
              <div className={`absolute inset-0 ${i === index ? 'kenburns' : ''}`}>
                <img
                  src={s.img}
                  alt={s.title?.[lang] || 'slide'}
                  className={`w-full h-full object-cover ${fading ? 'opacity-90' : 'opacity-100'} transition-opacity duration-400`}
                  loading={i === index ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 flex items-end justify-between">
                <div>
                  <h3 className="text-white text-lg md:text-2xl font-semibold drop-shadow">{s.title?.[lang] || ''}</h3>
                  {s.subtitle && (
                    <p className="text-emerald-200/85 text-sm md:text-base">{s.subtitle?.[lang]}</p>
                  )}
                </div>
                {s.href && (
                  <span className="text-emerald-300/90 text-xs md:text-sm bg-black/30 backdrop-blur px-3 py-1.5 rounded-full border border-emerald-500/30">{lang==='gr' ? 'Δες στο Instagram' : 'View on Instagram'}</span>
                )}
              </div>
            </a>
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? 'bg-emerald-400 w-6' : 'bg-emerald-700/60 hover:bg-emerald-600/80'}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

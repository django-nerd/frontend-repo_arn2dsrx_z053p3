import React, { useMemo } from 'react'

// Subtle floating ember particles for warm vibe
// Renders a handful of animated dots that rise and flicker
const Embers = ({ count = 18 }) => {
  const embers = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // random positions and timings
      const left = Math.random() * 100
      const size = 2 + Math.random() * 3
      const delay = Math.random() * 6
      const duration = 6 + Math.random() * 7
      const opacity = 0.35 + Math.random() * 0.5
      return { id: i, left, size, delay, duration, opacity }
    })
  }, [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((e) => (
        <span
          key={e.id}
          className="absolute rounded-full bg-emerald-300/80 shadow-[0_0_12px_rgba(16,185,129,0.45)] ember flicker"
          style={{
            left: `${e.left}%`,
            bottom: `-10%`,
            width: `${e.size}px`,
            height: `${e.size}px`,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
            opacity: e.opacity
          }}
        />
      ))}
    </div>
  )
}

export default Embers

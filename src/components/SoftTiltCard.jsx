import React from 'react'

const SoftTiltCard = ({ children, className = '' }) => {
  return (
    <div
      className={`group relative rounded-2xl bg-emerald-900/30 border border-emerald-700/30 hover:border-emerald-500/50 transition will-change-transform ${className}`}
      style={{
        transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)',
      }}
      onMouseMove={(e) => {
        const card = e.currentTarget
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = -((y - centerY) / centerY) * 4
        const rotateY = ((x - centerX) / centerX) * 4
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
      }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-emerald-500/10 via-transparent to-emerald-300/10" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default SoftTiltCard

import React, { useEffect, useRef, useState } from 'react'

// Lightweight parallax wrapper: moves children subtly with mouse/tilt
const ParallaxWrapper = ({ strength = 10, children, className = '' }) => {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const x = ((e.clientX - cx) / rect.width) * strength
      const y = ((e.clientY - cy) / rect.height) * strength
      setPos({ x, y })
    }

    const handleLeave = () => setPos({ x: 0, y: 0 })

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [strength])

  const style = {
    transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
    transition: 'transform 300ms ease'
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

export default ParallaxWrapper

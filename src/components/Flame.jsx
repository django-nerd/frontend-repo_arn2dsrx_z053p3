import React from 'react'

// Simple animated flame using layered gradients and keyframes
const Flame = ({ size = 80 }) => {
  const s = typeof size === 'number' ? `${size}px` : size
  return (
    <div className="relative" style={{ width: s, height: s }}>
      <div
        className="absolute inset-0 rounded-full mix-blend-screen animate-pulse"
        style={{
          background:
            'radial-gradient(circle at 50% 60%, rgba(255,180,80,0.35), transparent 60%)',
          filter: 'blur(12px)'
        }}
      />
      <div className="absolute inset-0 flex items-end justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 140"
          className="drop-shadow-[0_0_25px_rgba(255,140,0,0.45)]"
        >
          <defs>
            <radialGradient id="flameInner" cx="50%" cy="65%" r="60%">
              <stop offset="0%" stopColor="#fff2cc" />
              <stop offset="45%" stopColor="#ffd27a" />
              <stop offset="100%" stopColor="#ff8a3d" />
            </radialGradient>
            <radialGradient id="flameOuter" cx="50%" cy="70%" r="70%">
              <stop offset="0%" stopColor="#ffd27a" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#ff6a00" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ff3b00" stopOpacity="0.6" />
            </radialGradient>
            <filter id="flicker">
              <feTurbulence type="fractalNoise" baseFrequency="0.02 0.04" numOctaves="2" seed="2" />
              <feDisplacementMap in="SourceGraphic" scale="2">
                <animate attributeName="scale" values="2;5;2" dur="2s" repeatCount="indefinite" />
              </feDisplacementMap>
            </filter>
          </defs>

          {/* Outer flame */}
          <path
            d="M50 5 C70 30 78 45 78 60 C78 78 66 88 50 100 C34 88 22 78 22 60 C22 45 30 30 50 5 Z"
            fill="url(#flameOuter)"
            style={{ transformOrigin: '50% 75%' }}
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.03;1"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </path>

          {/* Inner flame */}
          <path
            d="M50 20 C62 38 66 48 66 60 C66 72 58 78 50 84 C42 78 34 72 34 60 C34 48 38 38 50 20 Z"
            fill="url(#flameInner)"
            filter="url(#flicker)"
          />
        </svg>
      </div>
    </div>
  )
}

export default Flame

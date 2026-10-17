export function Tree({ className = "h-full w-full" }) {
  return (
    <svg viewBox="0 0 160 220" className={className} aria-hidden="true">
      <rect x="70" y="148" width="22" height="62" rx="10" fill="#8B5A2B" />
      <circle cx="80" cy="118" r="50" fill="#2F7653" />
      <circle cx="46" cy="136" r="36" fill="#3E9468" />
      <circle cx="116" cy="132" r="40" fill="#267A52" />
      <circle cx="62" cy="100" r="18" fill="#D7F0DE" opacity="0.7" />
      <circle cx="98" cy="128" r="10" fill="#1F6A48" opacity="0.35" />
    </svg>
  )
}

export function Cloud({ className = "h-full w-full" }) {
  return (
    <svg viewBox="0 0 140 70" className={className} aria-hidden="true">
      <ellipse cx="46" cy="42" rx="32" ry="20" fill="#fff" />
      <ellipse cx="78" cy="34" rx="30" ry="24" fill="#fff" />
      <ellipse cx="104" cy="44" rx="24" ry="16" fill="#fff" />
    </svg>
  )
}

export function Flower({ className = "h-full w-full", petal = "#FF8DA1" }) {
  return (
    <svg viewBox="0 0 64 80" className={className} aria-hidden="true">
      <path d="M32 40c0 16-2 28-2 36" stroke="#3E9468" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="22" r="9" fill={petal} />
      <circle cx="20" cy="32" r="9" fill={petal} />
      <circle cx="44" cy="32" r="9" fill={petal} />
      <circle cx="32" cy="42" r="9" fill={petal} />
      <circle cx="32" cy="32" r="7" fill="#FFD45C" />
    </svg>
  )
}

export function Sun({ className = "h-full w-full" }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="16" fill="#FFD45C" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="36.5"
          y="4"
          width="7"
          height="14"
          rx="3.5"
          fill="#FFD45C"
          transform={`rotate(${deg} 40 40)`}
        />
      ))}
    </svg>
  )
}

export function LeafDecor({ className = "h-full w-full" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M8 28c8-16 24-20 34-20-2 14-10 28-24 32-4-4-7-8-10-12z" fill="#2F7653" />
      <path d="M16 30c8-2 14-10 18-16" stroke="#D7F0DE" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Grass({ className = "h-full w-full" }) {
  return (
    <svg viewBox="0 0 640 180" className={className} preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 78c70-48 130-20 200-46 74-28 110 24 180 8 66-16 100-52 170-34 48 12 62 36 90 24v150H0V78z"
        fill="#8FCB8A"
      />
      <path
        d="M0 118c80-28 140-6 210-24 78-20 110 18 180 4 64-12 120-30 250-8v90H0V118z"
        fill="#2F7653"
      />
    </svg>
  )
}

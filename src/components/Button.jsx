import { Link } from "react-router-dom"

const variants = {
  primary: "bg-coral text-ink hover:bg-coral-deep",
  secondary: "bg-white text-forest-dark ring-2 ring-forest/15 hover:bg-cream",
  sun: "bg-sun text-ink hover:brightness-95",
  forest: "bg-forest text-white hover:bg-forest-dark",
}

export default function Button({ to, children, className = "", variant = "primary", ...props }) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition active:scale-[0.98] motion-reduce:transform-none ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

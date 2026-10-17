import { Link } from "react-router-dom"

export default function LearningCard({ title, subtitle, art, to, comingSoonLabel, onSoon }) {
  const className =
    "wood-card group relative flex h-full min-h-[210px] w-full flex-col items-center rounded-[1.7rem] px-3 pb-4 pt-3 text-center text-ink transition hover:-translate-y-1 active:translate-y-0.5 active:shadow-[0_2px_0_#c4893e] motion-reduce:transition-none motion-reduce:hover:translate-y-0"

  const inner = (
    <>
      {comingSoonLabel ? (
        <span className="absolute end-2.5 top-2.5 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-forest-dark shadow-sm">
          {comingSoonLabel}
        </span>
      ) : null}
      <div className="flex h-24 w-full items-end justify-center transition group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:h-28">
        {art}
      </div>
      <p className="mt-2 text-lg font-bold leading-tight text-forest-dark">{title}</p>
      <p className="mt-1 text-sm font-medium leading-snug">{subtitle}</p>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className}>
        {inner}
      </Link>
    )
  }

  return (
    <button type="button" className={className} onClick={onSoon}>
      {inner}
    </button>
  )
}

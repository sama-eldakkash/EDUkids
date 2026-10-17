import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { Tree } from "./illustrations/Decor"

export default function PageBanner({ title, intro, backLabel }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-white px-5 py-6 shadow-soft sm:px-8 sm:py-8">
      <div className="pointer-events-none absolute -end-2 -top-4 opacity-90" aria-hidden="true">
        <Tree className="h-28 w-24" />
      </div>
      <Link to="/" className="inline-flex min-h-11 items-center gap-2 rounded-full font-semibold text-forest">
        <ArrowLeft className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
        {backLabel}
      </Link>
      <h1 className="relative mt-3 max-w-xl text-4xl font-bold text-forest-dark sm:text-5xl">{title}</h1>
      <p className="relative mt-2 max-w-xl text-lg">{intro}</p>
    </div>
  )
}

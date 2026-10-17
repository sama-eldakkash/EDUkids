import { Leaf } from "lucide-react"

export default function Logo({ inverted = false }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`grid h-10 w-10 place-items-center rounded-2xl sm:h-11 sm:w-11 ${
          inverted ? "bg-mint text-forest-dark" : "bg-forest text-white"
        }`}
      >
        <Leaf className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
      </span>
      <span className={`text-xl font-bold tracking-tight sm:text-2xl ${inverted ? "text-white" : "text-forest-dark"}`}>
        EduKids
      </span>
    </span>
  )
}

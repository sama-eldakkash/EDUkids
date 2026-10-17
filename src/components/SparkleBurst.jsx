import { motion, useReducedMotion } from "framer-motion"
import { Star } from "lucide-react"

const bits = [
  { x: -46, y: -28, delay: 0 },
  { x: 48, y: -22, delay: 0.04 },
  { x: -30, y: 26, delay: 0.08 },
  { x: 36, y: 30, delay: 0.02 },
  { x: 0, y: -48, delay: 0.06 },
]

export default function SparkleBurst({ burst }) {
  const reduce = useReducedMotion()
  if (!burst || reduce) return null

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {bits.map((bit, index) => (
        <motion.span
          key={`${burst}-${index}`}
          className="absolute left-1/2 top-1/2"
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
          animate={{ opacity: [0, 1, 0], x: bit.x, y: bit.y, scale: 1 }}
          transition={{ duration: 0.7, delay: bit.delay, ease: "easeOut" }}
        >
          <Star className="h-4 w-4 fill-sun text-sun" />
        </motion.span>
      ))}
    </div>
  )
}

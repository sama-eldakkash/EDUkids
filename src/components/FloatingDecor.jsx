import { LeafDecor } from "./illustrations/Decor"

const leaves = [
  { className: "start-[4%] top-28 h-8 w-8 idle-sway" },
  { className: "end-[6%] top-48 h-10 w-10 idle-float idle-delay" },
  { className: "start-[8%] top-[40rem] hidden h-7 w-7 idle-float idle-slow sm:block" },
]

export default function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {leaves.map((leaf) => (
        <div key={leaf.className} className={`absolute ${leaf.className}`}>
          <LeafDecor className="h-full w-full" />
        </div>
      ))}
    </div>
  )
}

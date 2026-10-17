import { useRef, useState } from "react"
import { Volume2 } from "lucide-react"
import { speak } from "../hooks/useSpeech"

export default function AudioButton({ label, text, lang, onResult, variant = "forest", className = "" }) {
  const [playing, setPlaying] = useState(false)
  const request = useRef(0)

  async function handleClick() {
    const id = request.current + 1
    request.current = id
    setPlaying(true)
    const result = await speak(text, lang)
    if (request.current !== id) return
    setPlaying(false)
    onResult?.(result.ok)
  }

  const styles =
    variant === "forest"
      ? "bg-forest text-white hover:bg-forest-dark"
      : "bg-white text-forest-dark ring-2 ring-forest/15 hover:bg-cream"

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      aria-pressed={playing}
      className={`inline-flex min-h-12 flex-wrap items-center justify-center gap-2 rounded-full px-4 text-center text-base font-semibold leading-tight transition active:scale-[0.98] motion-reduce:transform-none ${styles} ${className}`}
    >
      <Volume2 className={`h-5 w-5 ${playing ? "animate-pulse motion-reduce:animate-none" : ""}`} aria-hidden="true" />
      <span>{label}</span>
    </button>
  )
}

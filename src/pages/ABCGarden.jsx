import { useEffect, useRef, useState } from "react"
import { stopSpeech } from "../hooks/useSpeech"
import { arabicAlphabet, englishAlphabet } from "../data/alphabets"
import LetterPanel from "../components/LetterPanel"
import PageBanner from "../components/PageBanner"
import { useLanguage } from "../i18n/LanguageContext"
import { useProgress } from "../progress/ProgressContext"

export default function ABCGarden() {
  const { lang, t } = useLanguage()
  const { rememberLetter } = useProgress()
  const letters = lang === "ar" ? arabicAlphabet : englishAlphabet
  const [pickedId, setPickedId] = useState(null)
  const [burst, setBurst] = useState(0)
  const panelRef = useRef(null)
  const selected = letters.find((item) => item.id === pickedId) ?? letters[0]

  useEffect(() => {
    document.title = `${t("meta.abc")} · EduKids`
  }, [t])

  useEffect(() => {
    rememberLetter(selected.id)
  }, [selected.id, rememberLetter])

  useEffect(() => () => stopSpeech(), [])

  useEffect(() => {
    if (burst === 0) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    panelRef.current?.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" })
  }, [burst])

  function choose(letter) {
    setPickedId(letter.id)
    setBurst((value) => value + 1)
    rememberLetter(letter.id)
  }

  function step(direction) {
    const index = letters.findIndex((item) => item.id === selected.id)
    const next = letters[(index + direction + letters.length) % letters.length]
    choose(next)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <PageBanner title={t("abc.title")} intro={t("abc.intro")} backLabel={t("abc.back")} />
      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <div className="order-2 grid grid-cols-4 gap-2 sm:grid-cols-6 xl:grid-cols-7 lg:order-1">
          {letters.map((letter) => {
            const active = letter.id === selected.id
            return (
              <button
                key={letter.id}
                type="button"
                aria-pressed={active}
                onClick={() => choose(letter)}
                className={`grid min-h-14 place-items-center rounded-2xl text-2xl font-bold transition ${
                  active ? "bg-forest text-white" : "bg-white text-forest-dark shadow-soft hover:bg-mint/70"
                }`}
              >
                {letter.letter}
              </button>
            )
          })}
        </div>
        <div ref={panelRef} className="order-1 lg:sticky lg:top-24 lg:order-2">
          <LetterPanel letter={selected} burst={burst} onPrev={() => step(-1)} onNext={() => step(1)} />
        </div>
      </div>
    </div>
  )
}

import { useMemo, useState } from "react"
import { ObjectArt } from "../illustrations/Objects"
import { countRound } from "../../data/rounds"
import { useLanguage } from "../../i18n/LanguageContext"
import { formatNumeral } from "../../lib/numerals"
import { useProgress } from "../../progress/ProgressContext"
import GameFrame from "./GameFrame"

export default function CountGame() {
  const { lang, t } = useLanguage()
  const { completeRound } = useProgress()
  const [round, setRound] = useState(() => countRound(0))
  const [picked, setPicked] = useState(null)
  const [counted, setCounted] = useState(false)
  const correct = picked === round.count

  const status = useMemo(() => {
    if (picked == null) return ""
    return correct ? t("games.yesCount") : t("games.lookAgain")
  }, [picked, correct, t])

  function choose(value) {
    setPicked(value)
    if (value === round.count && !counted) {
      completeRound()
      setCounted(true)
    }
  }

  function next() {
    setRound(countRound(round.count))
    setPicked(null)
    setCounted(false)
  }

  return (
    <GameFrame
      title={t("games.countTitle")}
      prompt={t("games.countAsk")}
      status={status}
      onNext={next}
      onReplay={() => setPicked(null)}
      nextLabel={t("games.next")}
      replayLabel={t("games.replay")}
    >
      <div className="flex flex-wrap justify-center gap-2">
        {Array.from({ length: round.count }, (_, index) => (
          <ObjectArt key={index} name={round.object} decorative className="h-16 w-16 sm:h-20 sm:w-20" />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {round.options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => choose(option)}
            aria-pressed={picked === option}
            className={`min-h-16 rounded-2xl text-3xl font-bold ${
              picked === option ? "bg-forest text-white" : "bg-cream text-forest-dark"
            }`}
          >
            {formatNumeral(option, lang)}
          </button>
        ))}
      </div>
    </GameFrame>
  )
}

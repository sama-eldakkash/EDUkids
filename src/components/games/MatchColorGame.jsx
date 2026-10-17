import { useMemo, useState } from "react"
import ColorObject from "../illustrations/ColorObject"
import { colors } from "../../data/colors"
import { colorRound } from "../../data/rounds"
import { useLanguage } from "../../i18n/LanguageContext"
import { useProgress } from "../../progress/ProgressContext"
import GameFrame from "./GameFrame"

export default function MatchColorGame() {
  const { lang, t } = useLanguage()
  const { completeRound } = useProgress()
  const [round, setRound] = useState(() => colorRound(colors, ""))
  const [picked, setPicked] = useState(null)
  const [counted, setCounted] = useState(false)
  const target = colors.find((color) => color.id === round.targetId)
  const choices = round.choiceIds.map((id) => colors.find((color) => color.id === id))
  const correct = picked === round.targetId

  const status = useMemo(() => {
    if (!picked) return ""
    return correct ? t("games.yes") : t("games.lookAgain")
  }, [picked, correct, t])

  function choose(id) {
    setPicked(id)
    if (id === round.targetId && !counted) {
      completeRound()
      setCounted(true)
    }
  }

  function next() {
    setRound(colorRound(colors, round.targetId))
    setPicked(null)
    setCounted(false)
  }

  return (
    <GameFrame
      title={t("games.colorTitle")}
      prompt={t("games.colorAsk").replace("{color}", target.name[lang])}
      status={status}
      onNext={next}
      onReplay={() => setPicked(null)}
      nextLabel={t("games.next")}
      replayLabel={t("games.replay")}
    >
      <div className="mb-4 flex flex-col items-center gap-2">
        <span className="h-16 w-16 rounded-full ring-4 ring-cream" style={{ backgroundColor: target.fill }} />
        <span className="text-2xl font-bold text-forest-dark">{target.name[lang]}</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {choices.map((color) => (
          <button
            key={color.id}
            type="button"
            onClick={() => choose(color.id)}
            aria-pressed={picked === color.id}
            className={`min-h-16 rounded-[1.4rem] bg-cream p-3 ${
              picked === color.id ? "ring-4 ring-forest" : "ring-2 ring-transparent"
            }`}
          >
            <ColorObject kind={color.kind} fill={color.fill} decorative className="mx-auto h-24 w-24" />
            <span className="mt-2 block text-lg font-bold text-forest-dark">{color.name[lang]}</span>
          </button>
        ))}
      </div>
    </GameFrame>
  )
}

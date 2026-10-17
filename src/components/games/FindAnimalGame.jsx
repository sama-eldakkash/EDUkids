import { useMemo, useState } from "react"
import AudioButton from "../AudioButton"
import { AnimalArt } from "../illustrations/Characters"
import { animals } from "../../data/animals"
import { animalRound } from "../../data/rounds"
import { useLanguage } from "../../i18n/LanguageContext"
import { useProgress } from "../../progress/ProgressContext"
import GameFrame from "./GameFrame"

export default function FindAnimalGame() {
  const { lang, t } = useLanguage()
  const { completeRound } = useProgress()
  const [round, setRound] = useState(() => animalRound(animals, ""))
  const [picked, setPicked] = useState(null)
  const [counted, setCounted] = useState(false)
  const target = animals.find((animal) => animal.id === round.targetId)
  const choices = round.choiceIds.map((id) => animals.find((animal) => animal.id === id))
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
    setRound(animalRound(animals, round.targetId))
    setPicked(null)
    setCounted(false)
  }

  return (
    <GameFrame
      title={t("games.findTitle")}
      prompt={t("games.findAsk").replace("{name}", target.name[lang])}
      status={status}
      onNext={next}
      onReplay={() => setPicked(null)}
      nextLabel={t("games.next")}
      replayLabel={t("games.replay")}
    >
      <div className="mb-4 flex justify-center">
        <AudioButton label={t("games.hear")} text={target.name[lang]} lang={lang} />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {choices.map((animal) => (
          <button
            key={animal.id}
            type="button"
            onClick={() => choose(animal.id)}
            aria-pressed={picked === animal.id}
            className={`min-h-16 rounded-[1.4rem] bg-cream p-3 text-center ${
              picked === animal.id ? "ring-4 ring-forest" : "ring-2 ring-transparent"
            }`}
          >
            <AnimalArt id={animal.id} decorative className="mx-auto h-28 w-28" />
            <span className="mt-2 block text-xl font-bold text-forest-dark">{animal.name[lang]}</span>
          </button>
        ))}
      </div>
    </GameFrame>
  )
}

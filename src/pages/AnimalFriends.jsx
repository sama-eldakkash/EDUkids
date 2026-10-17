import { useCallback, useEffect, useState } from "react"
import { animals } from "../data/animals"
import AnimalDialog from "../components/AnimalDialog"
import AudioButton from "../components/AudioButton"
import PageBanner from "../components/PageBanner"
import { AnimalArt } from "../components/illustrations/Characters"
import { useLanguage } from "../i18n/LanguageContext"
import { stopSpeech } from "../hooks/useSpeech"
import { useProgress } from "../progress/ProgressContext"

const tones = ["bg-sky/35", "bg-sun/45", "bg-mint/55", "bg-coral/25", "bg-cream", "bg-sky/25", "bg-mint/35", "bg-sun/35"]

export default function AnimalFriends() {
  const { lang, t } = useLanguage()
  const { rememberAnimal } = useProgress()
  const [selectedId, setSelectedId] = useState(null)
  const [soundFailed, setSoundFailed] = useState(false)
  const selected = animals.find((animal) => animal.id === selectedId) ?? null

  useEffect(() => {
    document.title = `${t("meta.animals")} · EduKids`
  }, [t])

  useEffect(() => () => stopSpeech(), [])

  const close = useCallback(() => setSelectedId(null), [])

  function openAnimal(id) {
    setSelectedId(id)
    rememberAnimal(id)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <PageBanner title={t("animalsPage.title")} intro={t("animalsPage.intro")} backLabel={t("animalsPage.back")} />
      <p role="status" className="mt-4 min-h-6 text-center text-sm font-semibold text-forest">
        {soundFailed ? t("animalsPage.soundUnavailable") : ""}
      </p>
      <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 sm:gap-4">
        {animals.map((animal, index) => (
          <article key={animal.id} className="flex flex-col rounded-[1.7rem] bg-white p-3 shadow-soft">
            <button
              type="button"
              onClick={() => openAnimal(animal.id)}
              aria-pressed={selectedId === animal.id}
              className={`w-full rounded-[1.3rem] p-1 text-center ${
                selectedId === animal.id ? "ring-4 ring-forest" : "ring-2 ring-transparent"
              }`}
            >
              <span className={`grid h-32 place-items-center rounded-[1.2rem] sm:h-40 ${tones[index]}`}>
                <AnimalArt id={animal.id} decorative className="h-28 w-28 sm:h-36 sm:w-36" />
              </span>
              <span className="mt-3 block text-xl font-bold text-forest-dark">{animal.name[lang]}</span>
              {selectedId === animal.id ? (
                <span className="mt-1 block text-sm font-semibold text-forest">{t("animalsPage.chosen")}</span>
              ) : null}
            </button>
            <div className="mt-3">
              <AudioButton
                label={t("animalsPage.hearName")}
                text={animal.name[lang]}
                lang={lang}
                className="w-full px-3 text-sm sm:text-base"
                onResult={(ok) => setSoundFailed(!ok)}
              />
            </div>
          </article>
        ))}
      </div>
      <AnimalDialog animal={selected} onClose={close} />
    </div>
  )
}

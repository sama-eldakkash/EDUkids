import { useState } from "react"
import { motion } from "framer-motion"
import AudioButton from "./AudioButton"
import SparkleBurst from "./SparkleBurst"
import { ObjectArt } from "./illustrations/Objects"
import { useLanguage } from "../i18n/LanguageContext"

function LetterPanelBody({ letter, burst, onPrev, onNext }) {
  const { lang, t } = useLanguage()
  const [soundFailed, setSoundFailed] = useState(false)

  return (
    <motion.div
      key={letter.id}
      initial={{ opacity: 0.55, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
      className="relative overflow-hidden rounded-[2rem] bg-white p-6 text-center shadow-soft"
    >
      <SparkleBurst burst={burst} />
      <p className="text-7xl font-bold leading-none text-forest-dark sm:text-8xl">{letter.letter}</p>
      <div className="mx-auto mt-4 grid h-44 w-44 place-items-center rounded-full bg-mint/45">
        <ObjectArt name={letter.object} decorative className="h-36 w-36" />
      </div>
      <p className="mt-4 text-3xl font-bold text-ink">{letter.word}</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <AudioButton
          label={t("abc.hearLetter")}
          text={letter.spoken}
          lang={lang}
          className="w-full sm:w-auto"
          onResult={(ok) => setSoundFailed(!ok)}
        />
        <AudioButton
          label={t("abc.hearWord")}
          text={letter.word}
          lang={lang}
          variant="soft"
          className="w-full sm:w-auto"
          onResult={(ok) => setSoundFailed(!ok)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button type="button" onClick={onPrev} className="min-h-12 rounded-full bg-cream px-5 font-semibold text-forest-dark">
          {t("abc.prev")}
        </button>
        <button type="button" onClick={onNext} className="min-h-12 rounded-full bg-mint px-5 font-semibold text-forest-dark">
          {t("abc.next")}
        </button>
      </div>
      <p role="status" className="mt-3 min-h-6 text-sm font-semibold text-forest">
        {soundFailed ? t("abc.soundUnavailable") : ""}
      </p>
    </motion.div>
  )
}

export default function LetterPanel({ letter, burst, onPrev, onNext }) {
  return <LetterPanelBody key={letter.id} letter={letter} burst={burst} onPrev={onPrev} onNext={onNext} />
}

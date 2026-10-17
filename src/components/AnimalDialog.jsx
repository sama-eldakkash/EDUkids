import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import AudioButton from "./AudioButton"
import { AnimalArt } from "./illustrations/Characters"
import { useLanguage } from "../i18n/LanguageContext"

export default function AnimalDialog({ animal, onClose }) {
  const { lang, t } = useLanguage()
  const reduce = useReducedMotion()
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const [failedId, setFailedId] = useState("")
  const note = animal && failedId === animal.id ? t("animalsPage.soundUnavailable") : ""

  function updateNote(ok) {
    if (!animal) return
    setFailedId(ok ? "" : animal.id)
  }

  useEffect(() => {
    if (!animal) return undefined
    const previous = document.activeElement
    const shell = document.getElementById("app-shell")
    shell?.setAttribute("inert", "")
    closeRef.current?.focus()

    function onKey(event) {
      if (event.key === "Escape") {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== "Tab" || !dialogRef.current) return
      const items = [...dialogRef.current.querySelectorAll("button, [href], [tabindex]:not([tabindex='-1'])")].filter(
        (item) => !item.hasAttribute("disabled"),
      )
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = previousOverflow
      shell?.removeAttribute("inert")
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [animal, onClose])

  if (!animal) return null

  return createPortal(
    <div className="fixed inset-0 z-50 grid place-items-center bg-forest-dark/45 p-4" onClick={onClose}>
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="animal-dialog-title"
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-[2rem] bg-white p-6 text-center shadow-soft"
        initial={reduce ? false : { opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.22 }}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t("animalsPage.close")}
          className="absolute end-3 top-3 grid h-12 w-12 place-items-center rounded-full bg-cream text-ink"
        >
          <X aria-hidden="true" />
        </button>
        <div className="mx-auto mt-6 grid h-52 w-full place-items-center rounded-[1.6rem] bg-cream">
          <AnimalArt id={animal.id} decorative className="h-48 w-48" />
        </div>
        <h2 id="animal-dialog-title" className="mt-4 text-4xl font-bold text-forest-dark">
          {animal.name[lang]}
        </h2>
        <p className="mt-2 text-lg">{animal.sentence[lang]}</p>
        <div className="mt-5 flex flex-col gap-3">
          <AudioButton
            label={t("animalsPage.hearName")}
            text={animal.name[lang]}
            lang={lang}
            onResult={updateNote}
          />
          <AudioButton
            label={t("animalsPage.hearMore")}
            text={animal.sentence[lang]}
            lang={lang}
            variant="soft"
            onResult={updateNote}
          />
        </div>
        <p className="mt-3 text-sm">{t("animalsPage.soundNote")}</p>
        <p role="status" className="mt-3 min-h-6 text-sm font-semibold text-forest">
          {note}
        </p>
      </motion.div>
    </div>,
    document.body,
  )
}

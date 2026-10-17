import { useEffect, useState } from "react"
import AudioButton from "../components/AudioButton"
import PageBanner from "../components/PageBanner"
import ColorObject from "../components/illustrations/ColorObject"
import { colors } from "../data/colors"
import { useLanguage } from "../i18n/LanguageContext"
import { stopSpeech } from "../hooks/useSpeech"
import { useProgress } from "../progress/ProgressContext"

export default function ColorSplash() {
  const { lang, t } = useLanguage()
  const { rememberColor } = useProgress()
  const [pickedId, setPickedId] = useState(colors[0].id)
  const [soundFailed, setSoundFailed] = useState(false)
  const selected = colors.find((color) => color.id === pickedId) ?? colors[0]

  useEffect(() => {
    document.title = `${t("meta.colors")} · EduKids`
  }, [t])

  useEffect(() => () => stopSpeech(), [])

  useEffect(() => {
    rememberColor(selected.id)
  }, [selected.id, rememberColor])

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <PageBanner title={t("colorsPage.title")} intro={t("colorsPage.intro")} backLabel={t("colorsPage.back")} />
      <section className="mt-6 rounded-[2rem] bg-white p-6 text-center shadow-soft">
        <div className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-cream">
          <ColorObject kind={selected.kind} fill={selected.fill} decorative className="h-32 w-32" />
        </div>
        <h2 className="mt-4 text-4xl font-bold text-forest-dark">{selected.name[lang]}</h2>
        <p className="mt-2 text-lg">{selected.line[lang]}</p>
        <div className="mt-4 flex justify-center">
          <span className="h-10 w-10 rounded-full ring-4 ring-white" style={{ backgroundColor: selected.fill }} aria-hidden="true" />
        </div>
        <div className="mt-5">
          <AudioButton
            label={t("colorsPage.hear")}
            text={selected.name[lang]}
            lang={lang}
            onResult={(ok) => setSoundFailed(!ok)}
          />
        </div>
        <p role="status" className="mt-3 min-h-6 text-sm font-semibold text-forest">
          {soundFailed ? t("colorsPage.soundUnavailable") : ""}
        </p>
      </section>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {colors.map((color) => {
          const active = color.id === selected.id
          return (
            <button
              key={color.id}
              type="button"
              aria-pressed={active}
              onClick={() => setPickedId(color.id)}
              className={`rounded-[1.6rem] bg-white p-3 text-center shadow-soft ${
                active ? "ring-4 ring-forest" : "ring-2 ring-transparent"
              }`}
            >
              <span className="mx-auto grid h-24 w-full place-items-center rounded-2xl bg-cream">
                <ColorObject kind={color.kind} fill={color.fill} decorative className="h-20 w-20" />
              </span>
              <span className="mt-3 flex items-center justify-center gap-2 text-xl font-bold text-forest-dark">
                <span className="h-4 w-4 rounded-full" style={{ backgroundColor: color.fill }} aria-hidden="true" />
                {color.name[lang]}
              </span>
              {active ? <span className="mt-1 block text-sm font-semibold text-forest">{t("colorsPage.chosen")}</span> : null}
            </button>
          )
        })}
      </div>
    </div>
  )
}

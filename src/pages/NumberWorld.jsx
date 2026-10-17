import { useEffect, useState } from "react"
import AudioButton from "../components/AudioButton"
import PageBanner from "../components/PageBanner"
import { ObjectArt } from "../components/illustrations/Objects"
import { numbers } from "../data/numbers"
import { useLanguage } from "../i18n/LanguageContext"
import { stopSpeech } from "../hooks/useSpeech"
import { formatNumeral } from "../lib/numerals"
import { useProgress } from "../progress/ProgressContext"

function CountingGroup({ item, lang }) {
  const { t } = useLanguage()
  const [order, setOrder] = useState([])

  function tap(index) {
    setOrder((current) => (current.includes(index) ? current : [...current, index]))
  }

  return (
    <div>
      <p className="text-lg">{t("numbersPage.tap")}</p>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {Array.from({ length: item.value }, (_, index) => {
          const place = order.indexOf(index)
          const tapped = place >= 0
          return (
            <button
              key={index}
              type="button"
              onClick={() => tap(index)}
              aria-pressed={tapped}
              aria-label={tapped ? formatNumeral(place + 1, lang) : t("numbersPage.picture")}
              className={`relative grid min-h-14 place-items-center rounded-2xl bg-cream p-1 ${
                tapped ? "ring-4 ring-forest" : "ring-2 ring-transparent"
              }`}
            >
              <ObjectArt name={item.object} decorative className="h-12 w-12 sm:h-14 sm:w-14" />
              {tapped ? (
                <span className="absolute -top-2 end-1 grid h-7 min-w-7 place-items-center rounded-full bg-forest px-1 text-sm font-bold text-white">
                  {formatNumeral(place + 1, lang)}
                </span>
              ) : null}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function NumberWorld() {
  const { lang, t } = useLanguage()
  const { rememberNumber } = useProgress()
  const [value, setValue] = useState(1)
  const [soundFailed, setSoundFailed] = useState(false)
  const item = numbers.find((entry) => entry.value === value) ?? numbers[0]

  useEffect(() => {
    document.title = `${t("meta.numbers")} · EduKids`
  }, [t])

  useEffect(() => () => stopSpeech(), [])

  useEffect(() => {
    rememberNumber(String(item.value))
  }, [item.value, rememberNumber])

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <PageBanner title={t("numbersPage.title")} intro={t("numbersPage.intro")} backLabel={t("numbersPage.back")} />
      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)]">
        <div className="order-2 grid grid-cols-5 gap-2 sm:grid-cols-5 lg:order-1">
          {numbers.map((entry) => {
            const active = entry.value === item.value
            return (
              <button
                key={entry.value}
                type="button"
                aria-pressed={active}
                onClick={() => setValue(entry.value)}
                className={`grid min-h-16 place-items-center rounded-2xl text-3xl font-bold ${
                  active ? "bg-forest text-white" : "bg-white text-forest-dark shadow-soft"
                }`}
              >
                {formatNumeral(entry.value, lang)}
              </button>
            )
          })}
        </div>
        <section className="order-1 rounded-[2rem] bg-white p-6 text-center shadow-soft lg:order-2">
          <p className="text-7xl font-bold leading-none text-forest-dark sm:text-8xl">{formatNumeral(item.value, lang)}</p>
          <p className="mt-3 text-3xl font-bold capitalize text-ink">{item.name[lang]}</p>
          <div className="mt-4">
            <CountingGroup key={`${item.value}-${lang}`} item={item} lang={lang} />
          </div>
          <div className="mt-5">
            <AudioButton
              label={t("numbersPage.hear")}
              text={item.name[lang]}
              lang={lang}
              onResult={(ok) => setSoundFailed(!ok)}
            />
          </div>
          <p role="status" className="mt-3 min-h-6 text-sm font-semibold text-forest">
            {soundFailed ? t("numbersPage.soundUnavailable") : ""}
          </p>
        </section>
      </div>
    </div>
  )
}

import { Languages, Sparkles, Volume2 } from "lucide-react"
import Button from "./Button"
import ProgressSummary from "./ProgressSummary"
import { useLanguage } from "../i18n/LanguageContext"

const points = ["parents.visual", "parents.audio", "parents.bilingual", "parents.simple"]

export default function ParentsSection() {
  const { t } = useLanguage()

  const features = [
    {
      title: t("features.playTitle"),
      body: t("features.playBody"),
      icon: Sparkles,
      tone: "bg-cream",
    },
    {
      title: t("features.listenTitle"),
      body: t("features.listenBody"),
      icon: Volume2,
      tone: "bg-cream",
    },
    {
      title: t("features.languagesTitle"),
      body: t("features.languagesBody"),
      icon: Languages,
      tone: "bg-cream",
    },
  ]

  return (
    <>
      <section id="parents" className="mx-auto max-w-6xl px-4 pb-6 pt-4">
        <div className="rounded-[2rem] border border-forest/10 bg-white px-5 py-8 sm:px-10 sm:py-12">
          <h2 className="text-3xl font-bold text-forest-dark sm:text-4xl">{t("parents.title")}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">{t("parents.body")}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((key) => (
              <li key={key} className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 text-base font-semibold">
                <span className="h-3 w-3 shrink-0 rounded-full bg-forest" aria-hidden="true" />
                {t(key)}
              </li>
            ))}
          </ul>
          <ProgressSummary />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-3xl font-bold text-forest-dark sm:text-4xl">{t("features.title")}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article key={feature.title} className="rounded-[1.8rem] border border-forest/10 bg-white p-6">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${feature.tone} text-forest`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-2xl font-bold text-forest-dark">{feature.title}</h3>
                <p className="mt-2 text-lg leading-relaxed">{feature.body}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-4">
        <div className="rounded-[2rem] bg-forest px-6 py-10 text-white sm:px-10">
          <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">{t("nursery.title")}</h2>
          <p className="mt-3 max-w-xl text-lg text-white/95">{t("nursery.body")}</p>
          <Button to="/#explore" variant="sun" className="mt-6">
            {t("nursery.cta")}
          </Button>
        </div>
      </section>
    </>
  )
}

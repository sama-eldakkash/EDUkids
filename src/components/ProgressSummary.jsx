import { useLanguage } from "../i18n/LanguageContext"
import { useProgress } from "../progress/ProgressContext"

export default function ProgressSummary() {
  const { t } = useLanguage()
  const { progress } = useProgress()
  const rows = [
    ["progress.letters", progress.letters.length],
    ["progress.numbers", progress.numbers.length],
    ["progress.colors", progress.colors.length],
    ["progress.animals", progress.animals.length],
    ["progress.games", progress.games],
  ]

  return (
    <aside className="mt-8 rounded-[1.6rem] bg-cream px-4 py-5">
      <h3 className="text-xl font-bold text-forest-dark">{t("progress.title")}</h3>
      <p className="mt-1 text-base">{t("progress.note")}</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {rows.map(([key, count]) => (
          <li key={key} className="rounded-2xl bg-white px-4 py-3 font-semibold">
            {t(key)}: {count}
          </li>
        ))}
      </ul>
    </aside>
  )
}

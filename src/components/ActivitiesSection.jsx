import { Link } from "react-router-dom"
import { useLanguage } from "../i18n/LanguageContext"

export default function ActivitiesSection() {
  const { t } = useLanguage()
  const items = [
    { to: "/games?play=find", title: t("games.findTitle"), body: t("games.findBody") },
    { to: "/games?play=color", title: t("games.colorTitle"), body: t("games.colorBody") },
    { to: "/games?play=count", title: t("games.countTitle"), body: t("games.countBody") },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-center text-3xl font-bold text-forest-dark sm:text-4xl">{t("activities.title")}</h2>
      <p className="mt-2 text-center text-lg">{t("activities.subtitle")}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <Link key={item.to} to={item.to} className="rounded-[1.8rem] bg-white p-6 shadow-soft">
            <h3 className="text-2xl font-bold text-forest-dark">{item.title}</h3>
            <p className="mt-2 text-lg">{item.body}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

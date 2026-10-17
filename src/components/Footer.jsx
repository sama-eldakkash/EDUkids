import { Link } from "react-router-dom"
import Logo from "./Logo"
import { LeafDecor } from "./illustrations/Decor"
import { useLanguage } from "../i18n/LanguageContext"

const year = new Date().getFullYear()

const links = [
  { key: "nav.home", to: "/" },
  { key: "nav.abc", to: "/abc" },
  { key: "nav.numbers", to: "/numbers" },
  { key: "nav.colors", to: "/colors" },
  { key: "nav.animals", to: "/animals" },
  { key: "nav.games", to: "/games" },
  { key: "nav.parents", to: "/#parents" },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-forest-dark text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 pt-6 text-mint" aria-hidden="true">
        <LeafDecor className="h-6 w-6" />
        <span className="h-px flex-1 bg-white/15" />
        <LeafDecor className="h-5 w-5 opacity-80" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <Logo inverted />
          <p className="mt-3 text-base text-white/90">{t("footer.tagline")}</p>
        </div>
        <nav aria-label={t("nav.primary")}>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <li key={link.key}>
                <Link to={link.to} className="inline-flex min-h-11 items-center font-semibold text-white hover:text-mint">
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-sm text-white/80">© {year} EduKids</p>
      </div>
    </footer>
  )
}

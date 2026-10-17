import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import LanguageSwitcher from "./LanguageSwitcher"
import Logo from "./Logo"
import { useLanguage } from "../i18n/LanguageContext"

const links = [
  { key: "nav.home", to: "/" },
  { key: "nav.explore", to: "/#explore" },
  { key: "nav.abc", to: "/abc" },
  { key: "nav.numbers", to: "/numbers" },
  { key: "nav.colors", to: "/colors" },
  { key: "nav.animals", to: "/animals" },
  { key: "nav.games", to: "/games" },
  { key: "nav.parents", to: "/#parents" },
]

function isActive(pathname, hash, to) {
  if (to === "/") return pathname === "/" && hash === ""
  if (to.startsWith("/#")) return pathname === "/" && hash === to.slice(1)
  return pathname === to
}

export default function Navbar() {
  const { t } = useLanguage()
  const { pathname, hash } = useLocation()
  const routeKey = `${pathname}${hash}`
  const [menuRoute, setMenuRoute] = useState(null)
  const open = menuRoute === routeKey

  useEffect(() => {
    if (!open) return undefined
    function onKey(event) {
      if (event.key === "Escape") setMenuRoute(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3" aria-label={t("nav.primary")}>
        <Link to="/" className="rounded-2xl">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((link) => {
            const active = isActive(pathname, hash, link.to)
            return (
              <li key={link.key}>
                <Link
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center rounded-full px-2.5 text-sm font-semibold ${
                    active ? "bg-mint text-forest-dark" : "text-ink hover:bg-mint/70"
                  }`}
                >
                  {t(link.key)}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setMenuRoute(open ? null : routeKey)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{open ? t("nav.closeMenu") : t("nav.openMenu")}</span>
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-forest/10 bg-cream px-4 py-3 xl:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
              const active = isActive(pathname, hash, link.to)
              return (
                <li key={link.key}>
                  <Link
                    to={link.to}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-12 items-center rounded-2xl px-4 text-lg font-semibold ${
                      active ? "bg-mint text-forest-dark" : "text-ink hover:bg-white"
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </header>
  )
}

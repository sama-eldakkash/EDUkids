import { useLanguage } from "../i18n/LanguageContext"

export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className={`flex rounded-full bg-mint/60 p-1 ${className}`} role="group" aria-label={t("nav.language")}>
      <button
        type="button"
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
        className={`min-h-10 rounded-full px-2.5 text-sm font-bold sm:px-3 ${
          lang === "en" ? "bg-forest text-white" : "text-ink"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        aria-pressed={lang === "ar"}
        onClick={() => setLang("ar")}
        className={`min-h-10 rounded-full px-2.5 text-sm font-bold sm:px-3 ${
          lang === "ar" ? "bg-forest text-white" : "text-ink"
        }`}
      >
        عربي
      </button>
    </div>
  )
}

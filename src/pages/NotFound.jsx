import { useEffect } from "react"
import Button from "../components/Button"
import { useLanguage } from "../i18n/LanguageContext"

export default function NotFound() {
  const { t } = useLanguage()

  useEffect(() => {
    document.title = `${t("meta.notFound")} · EduKids`
  }, [t])

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-forest-dark">{t("notFound.title")}</h1>
      <p className="mt-3 text-lg">{t("notFound.body")}</p>
      <Button to="/" className="mt-6">
        {t("notFound.home")}
      </Button>
    </div>
  )
}

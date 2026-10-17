import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { translate } from "./translations"

const LanguageContext = createContext(null)

function readStoredLanguage() {
  try {
    return localStorage.getItem("edukids-lang") === "ar" ? "ar" : "en"
  } catch {
    return "en"
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLanguage)

  useEffect(() => {
    document.documentElement.lang = lang === "ar" ? "ar" : "en"
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    try {
      localStorage.setItem("edukids-lang", lang)
    } catch {
      // Preference simply stays for this visit if storage is blocked.
    }
  }, [lang])

  const changeLanguage = useCallback((next) => {
    setLang(next === "ar" ? "ar" : "en")
  }, [])

  const t = useCallback((key) => translate(lang, key), [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang: changeLanguage,
      t,
      dir: lang === "ar" ? "rtl" : "ltr",
    }),
    [lang, changeLanguage, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return value
}

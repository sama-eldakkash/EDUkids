import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const behavior = reduce ? "auto" : "smooth"
    let timer

    function attempt(tries) {
      if (hash) {
        let target = null
        try {
          target = document.querySelector(hash)
        } catch {
          target = null
        }
        if (target) {
          target.scrollIntoView({ behavior, block: "start" })
          return
        }
        if (tries < 24) {
          timer = window.setTimeout(() => attempt(tries + 1), 50)
          return
        }
      }
      window.scrollTo({ top: 0, behavior: "auto" })
    }

    attempt(0)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}

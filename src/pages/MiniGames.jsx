import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import PageBanner from "../components/PageBanner"
import CountGame from "../components/games/CountGame"
import FindAnimalGame from "../components/games/FindAnimalGame"
import MatchColorGame from "../components/games/MatchColorGame"
import { useLanguage } from "../i18n/LanguageContext"
import { stopSpeech } from "../hooks/useSpeech"

const modes = ["find", "color", "count"]

export default function MiniGames() {
  const { t } = useLanguage()
  const [params, setParams] = useSearchParams()
  const requested = params.get("play")
  const mode = modes.includes(requested) ? requested : null

  useEffect(() => {
    document.title = `${t("meta.games")} · EduKids`
  }, [t])

  useEffect(() => () => stopSpeech(), [])

  function open(next) {
    setParams(next ? { play: next } : {})
  }

  const cards = [
    { id: "find", title: t("games.findTitle"), body: t("games.findBody") },
    { id: "color", title: t("games.colorTitle"), body: t("games.colorBody") },
    { id: "count", title: t("games.countTitle"), body: t("games.countBody") },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <PageBanner title={t("games.title")} intro={t("games.intro")} backLabel={t("games.back")} />
      {mode ? (
        <div className="mt-6">
          <button
            type="button"
            onClick={() => open(null)}
            className="mb-4 inline-flex min-h-11 items-center rounded-full px-2 font-semibold text-forest"
          >
            {t("games.all")}
          </button>
          {mode === "find" ? <FindAnimalGame key={mode} /> : null}
          {mode === "color" ? <MatchColorGame key={mode} /> : null}
          {mode === "count" ? <CountGame key={mode} /> : null}
        </div>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => open(card.id)}
              className="rounded-[1.8rem] bg-white p-6 text-start shadow-soft"
            >
              <span className="block text-2xl font-bold text-forest-dark">{card.title}</span>
              <span className="mt-2 block text-lg">{card.body}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

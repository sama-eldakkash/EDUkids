import CharacterCard from "./CharacterCard"
import { Elephant, Giraffe, Monkey } from "./illustrations/Characters"
import { useLanguage } from "../i18n/LanguageContext"

export default function FriendsSection() {
  const { t } = useLanguage()

  const friends = [
    {
      id: "ellie",
      name: t("friends.ellieName"),
      line: t("friends.ellieLine"),
      tone: "bg-sky/35",
      art: <Elephant decorative className="mx-auto h-48 w-auto sm:h-56" />,
    },
    {
      id: "gigi",
      name: t("friends.gigiName"),
      line: t("friends.gigiLine"),
      tone: "bg-sun/45",
      art: <Giraffe decorative className="mx-auto h-52 w-auto sm:h-60" />,
    },
    {
      id: "milo",
      name: t("friends.miloName"),
      line: t("friends.miloLine"),
      tone: "bg-mint/55",
      art: <Monkey decorative className="mx-auto h-44 w-auto sm:h-52" />,
    },
  ]

  return (
    <section id="friends" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <h2 className="text-center text-3xl font-bold text-forest-dark sm:text-4xl">{t("friends.title")}</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {friends.map((friend) => (
          <CharacterCard key={friend.id} name={friend.name} line={friend.line} art={friend.art} tone={friend.tone} />
        ))}
      </div>
    </section>
  )
}

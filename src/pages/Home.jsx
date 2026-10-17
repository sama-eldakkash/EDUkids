import { useEffect } from "react"
import ActivitiesSection from "../components/ActivitiesSection"
import FloatingDecor from "../components/FloatingDecor"
import FriendsSection from "../components/FriendsSection"
import HeroSection from "../components/HeroSection"
import ParentsSection from "../components/ParentsSection"
import { useLanguage } from "../i18n/LanguageContext"

export default function Home() {
  const { t } = useLanguage()

  useEffect(() => {
    document.title = t("meta.home")
  }, [t])

  return (
    <div className="relative">
      <FloatingDecor />
      <HeroSection />
      <FriendsSection />
      <ActivitiesSection />
      <ParentsSection />
    </div>
  )
}

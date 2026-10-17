import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import Button from "./Button"
import LearningCard from "./LearningCard"
import { AnimalsArt, ColorsArt, GamesArt, LettersArt, NumbersArt } from "./illustrations/CardArt"
import HeroScene from "./illustrations/HeroScene"
import { useLanguage } from "../i18n/LanguageContext"

export default function HeroSection() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section className="px-4 pb-4 pt-6 sm:pt-8">
      <motion.div
        className="relative z-10 mx-auto max-w-6xl rounded-[2rem] bg-white p-4 shadow-soft sm:p-7 lg:p-10"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-start-1 lg:row-start-1">
            <h1 className="max-w-xl text-4xl font-bold leading-[1.05] text-forest-dark sm:text-5xl lg:text-[4.25rem]">
              {t("hero.title")}
            </h1>
            <p className="mt-4 max-w-md text-lg leading-relaxed sm:text-xl">{t("hero.description")}</p>
          </div>
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <HeroScene />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-start-1 lg:row-start-2">
            <Button to="/abc" className="w-full sm:w-auto">
              {t("hero.start")}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
            </Button>
            <Button to="/#friends" variant="secondary" className="w-full sm:w-auto">
              {t("hero.friends")}
            </Button>
          </div>
        </div>

        <div id="explore" className="mt-8 sm:mt-10">
          <h2 className="text-center text-3xl font-bold text-forest-dark sm:text-4xl">{t("worlds.eyebrow")}</h2>
          <p className="mt-2 text-center text-lg">{t("worlds.subtitle")}</p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
            <LearningCard
              title={t("worlds.abc.title")}
              subtitle={t("worlds.abc.subtitle")}
              art={<LettersArt />}
              to="/abc"
            />
            <LearningCard
              title={t("worlds.numbers.title")}
              subtitle={t("worlds.numbers.subtitle")}
              art={<NumbersArt />}
              to="/numbers"
            />
            <LearningCard
              title={t("worlds.colors.title")}
              subtitle={t("worlds.colors.subtitle")}
              art={<ColorsArt />}
              to="/colors"
            />
            <LearningCard
              title={t("worlds.animals.title")}
              subtitle={t("worlds.animals.subtitle")}
              art={<AnimalsArt />}
              to="/animals"
            />
            <LearningCard
              title={t("worlds.games.title")}
              subtitle={t("worlds.games.subtitle")}
              art={<GamesArt />}
              to="/games"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

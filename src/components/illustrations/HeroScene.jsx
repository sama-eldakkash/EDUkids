import { Bird, Elephant, Giraffe, Monkey } from "./Characters"
import { Cloud, Flower, Sun, Tree } from "./Decor"
import { useLanguage } from "../../i18n/LanguageContext"

export default function HeroScene() {
  const { t } = useLanguage()

  return (
    <div
      className="relative mx-auto aspect-[5/4] w-full max-w-[620px] overflow-hidden sm:aspect-[6/5]"
      role="img"
      aria-label={t("hero.scene")}
    >
      <div className="absolute inset-x-[4%] top-[2%] h-[64%] rounded-[46%] bg-sky/30" />
      <div className="idle-float absolute start-[4%] top-[1%] h-12 w-12 sm:h-[4.5rem] sm:w-[4.5rem]">
        <Sun />
      </div>
      <Cloud className="absolute start-[18%] top-[8%] h-9 w-20 opacity-95 sm:h-11 sm:w-24" />
      <Cloud className="absolute end-[8%] top-[16%] h-7 w-16 opacity-80" />
      <div className="absolute inset-x-[-10%] bottom-[7%] h-[40%] rounded-t-[50%] bg-[#9ed49a]" />
      <Tree className="absolute start-[-4%] bottom-[16%] z-[1] h-32 w-24 sm:h-40 sm:w-28" />
      <Tree className="absolute end-[-6%] bottom-[14%] z-[1] h-36 w-28 sm:h-44 sm:w-32" />
      <div className="absolute inset-x-[-6%] bottom-0 z-[2] h-[22%] rounded-t-[48%] bg-forest" />
      <Flower className="absolute start-[10%] bottom-[11%] z-[3] h-9 w-7" />
      <Flower className="absolute end-[8%] bottom-[13%] z-[3] h-8 w-7" petal="#FFD45C" />
      <Flower className="absolute start-[46%] bottom-[7%] z-30 h-7 w-6" petal="#F7B7C4" />
      <div className="idle-float idle-slow absolute start-[14%] bottom-[8%] z-10 w-[36%]">
        <div className="face-in">
          <Giraffe decorative className="h-auto w-full" />
        </div>
      </div>
      <div className="idle-float idle-delay absolute end-[2%] bottom-[7%] z-10 w-[40%]">
        <div className="face-in">
          <Elephant decorative className="h-auto w-full" />
        </div>
      </div>
      <div className="idle-float idle-delay-2 absolute start-[28%] bottom-[3%] z-20 w-[32%]">
        <div className="face-in">
          <Monkey decorative className="h-auto w-full" />
        </div>
      </div>
      <div className="idle-sway absolute end-[22%] top-[16%] z-20 w-11 sm:w-14">
        <div className="face-in">
          <Bird decorative />
        </div>
      </div>
    </div>
  )
}

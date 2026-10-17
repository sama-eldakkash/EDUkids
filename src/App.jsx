import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { MotionConfig, motion, useReducedMotion } from "framer-motion"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import Navbar from "./components/Navbar"
import ScrollManager from "./components/ScrollManager"
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext"
import { ProgressProvider } from "./progress/ProgressContext"

const Home = lazy(() => import("./pages/Home.jsx"))
const ABCGarden = lazy(() => import("./pages/ABCGarden.jsx"))
const AnimalFriends = lazy(() => import("./pages/AnimalFriends.jsx"))
const NumberWorld = lazy(() => import("./pages/NumberWorld.jsx"))
const ColorSplash = lazy(() => import("./pages/ColorSplash.jsx"))
const MiniGames = lazy(() => import("./pages/MiniGames.jsx"))
const NotFound = lazy(() => import("./pages/NotFound.jsx"))

function AnimatedRoutes() {
  const location = useLocation()
  const reduce = useReducedMotion()

  return (
    <motion.div
      key={location.pathname}
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/abc" element={<ABCGarden />} />
        <Route path="/animals" element={<AnimalFriends />} />
        <Route path="/numbers" element={<NumberWorld />} />
        <Route path="/colors" element={<ColorSplash />} />
        <Route path="/games" element={<MiniGames />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </motion.div>
  )
}

function Shell() {
  const { t } = useLanguage()

  return (
    <div id="app-shell" className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:font-semibold"
      >
        {t("nav.skip")}
      </a>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main id="main" className="flex-1">
          <Suspense fallback={<div className="grid min-h-[60vh] place-items-center"><Logo /></div>}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <LanguageProvider>
          <ProgressProvider>
            <ScrollManager />
            <Shell />
          </ProgressProvider>
        </LanguageProvider>
      </BrowserRouter>
    </MotionConfig>
  )
}

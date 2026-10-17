import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

const STORAGE_KEY = "edukids-progress"

const empty = () => ({
  letters: [],
  numbers: [],
  colors: [],
  animals: [],
  games: 0,
})

function cleanList(value, limit) {
  if (!Array.isArray(value)) return []
  return value.filter((item) => typeof item === "string").slice(0, limit)
}

function readStored() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null")
    if (!raw || typeof raw !== "object") return empty()
    const games = Number(raw.games)
    return {
      letters: cleanList(raw.letters, 80),
      numbers: cleanList(raw.numbers, 20),
      colors: cleanList(raw.colors, 12),
      animals: cleanList(raw.animals, 12),
      games: Number.isFinite(games) ? Math.min(999, Math.max(0, Math.floor(games))) : 0,
    }
  } catch {
    return empty()
  }
}

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(readStored)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      // The summary stays in memory if storage is blocked.
    }
  }, [progress])

  const remember = useCallback((key, id) => {
    if (!id) return
    setProgress((current) => {
      if (current[key].includes(id)) return current
      return { ...current, [key]: [...current[key], id] }
    })
  }, [])

  const completeRound = useCallback(() => {
    setProgress((current) => ({ ...current, games: current.games + 1 }))
  }, [])

  const value = useMemo(
    () => ({
      progress,
      rememberLetter: (id) => remember("letters", id),
      rememberNumber: (id) => remember("numbers", id),
      rememberColor: (id) => remember("colors", id),
      rememberAnimal: (id) => remember("animals", id),
      completeRound,
    }),
    [progress, remember, completeRound],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const value = useContext(ProgressContext)
  if (!value) throw new Error("useProgress must be used within ProgressProvider")
  return value
}

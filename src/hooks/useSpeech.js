let activeUtterance = null
let recentKey = ""
let recentAt = 0
let recentPromise = null

export function canSpeak() {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window
}

function pickVoice(lang) {
  const voices = window.speechSynthesis.getVoices()
  const prefix = lang === "ar" ? "ar" : "en"
  return (
    voices.find((voice) => voice.lang?.toLowerCase().startsWith(`${prefix}-`) && voice.localService) ||
    voices.find((voice) => voice.lang?.toLowerCase().startsWith(prefix)) ||
    null
  )
}

export function stopSpeech() {
  if (!canSpeak()) return
  window.speechSynthesis.cancel()
}

export function speak(text, lang) {
  if (!canSpeak() || !text) {
    return Promise.resolve({ ok: false, reason: "unsupported" })
  }

  const key = `${lang}:${text}`
  const now = Date.now()
  if (recentPromise && recentKey === key && now - recentAt < 450) return recentPromise

  const synth = window.speechSynthesis
  synth.resume()
  synth.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  activeUtterance = utterance
  if (!activeUtterance) {
    return Promise.resolve({ ok: false, reason: "error" })
  }
  utterance.lang = lang === "ar" ? "ar-SA" : "en-US"
  utterance.rate = lang === "ar" ? 0.86 : 0.92
  utterance.pitch = 1.04

  const voice = pickVoice(lang)
  if (voice) utterance.voice = voice

  recentKey = key
  recentAt = now
  recentPromise = new Promise((resolve) => {
    let settled = false
    const finish = (result) => {
      if (settled) return
      settled = true
      resolve(result)
    }

    utterance.onend = () => finish({ ok: true })
    utterance.onerror = (event) => {
      if (event.error === "interrupted" || event.error === "canceled") {
        finish({ ok: true })
        return
      }
      finish({ ok: false, reason: event.error || "error" })
    }

    try {
      synth.speak(utterance)
    } catch {
      finish({ ok: false, reason: "error" })
      return
    }

    window.setTimeout(() => finish({ ok: true }), Math.min(8000, 1000 + String(text).length * 150))
  })
  return recentPromise
}

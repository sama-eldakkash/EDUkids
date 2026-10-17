const eastern = "٠١٢٣٤٥٦٧٨٩"

export function formatNumeral(value, lang) {
  const text = String(value)
  if (lang !== "ar") return text
  return text.replace(/\d/g, (digit) => eastern[digit])
}

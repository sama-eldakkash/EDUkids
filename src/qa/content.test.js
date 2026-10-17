import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { arabicAlphabet, englishAlphabet } from "../data/alphabets.js"
import { animals } from "../data/animals.js"
import { colors } from "../data/colors.js"
import { numbers } from "../data/numbers.js"
import { animalRound, colorRound, countRound } from "../data/rounds.js"
import { translations } from "../i18n/translations.js"

const arabicOrder = "أبتثجحخدذرزسشصضطظعغفقكلمنهوي"

function leafKeys(node, prefix = "") {
  return Object.entries(node).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key
    return value && typeof value === "object" ? leafKeys(value, path) : [path]
  })
}

test("English alphabet is A through Z with an illustration for every letter", () => {
  assert.deepEqual(
    englishAlphabet.map((item) => item.letter),
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  )
  assert.equal(new Set(englishAlphabet.map((item) => item.object)).size, 26)
})

test("Arabic alphabet has 28 letters in order", () => {
  assert.equal(arabicAlphabet.map((item) => item.letter).join(""), arabicOrder)
  assert.equal(arabicAlphabet.length, 28)
})

test("every letter illustration exists in the object catalog", () => {
  const source = readFileSync(new URL("../components/illustrations/Objects.jsx", import.meta.url), "utf8")
  const catalog = source.slice(source.indexOf("const catalog"))
  for (const item of [...englishAlphabet, ...arabicAlphabet]) {
    assert.match(catalog, new RegExp(`\\b${item.object}:`))
  }
})

test("numbers 1 through 10 have names in both languages", () => {
  assert.deepEqual(
    numbers.map((item) => item.value),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  )
  for (const item of numbers) {
    assert.ok(item.name.en)
    assert.ok(item.name.ar)
    assert.ok(item.object)
  }
})

test("six learning colors have English and Arabic names", () => {
  assert.deepEqual(
    colors.map((item) => item.id),
    ["red", "blue", "yellow", "green", "orange", "purple"],
  )
  for (const color of colors) {
    assert.ok(color.name.en)
    assert.ok(color.name.ar)
    assert.ok(color.line.en)
    assert.ok(color.line.ar)
    assert.match(color.fill, /^#[0-9A-F]{6}$/i)
  }
})

test("eight animals have English and Arabic names", () => {
  assert.deepEqual(
    animals.map((item) => item.id),
    ["elephant", "giraffe", "monkey", "lion", "cat", "dog", "cow", "duck"],
  )
  for (const animal of animals) {
    assert.ok(animal.name.en)
    assert.ok(animal.name.ar)
    assert.ok(animal.sentence.en)
    assert.ok(animal.sentence.ar)
  }
})

test("animal and color rounds include exactly one correct choice", () => {
  let previous = ""
  for (let index = 0; index < 20; index += 1) {
    const round = animalRound(animals, previous)
    assert.equal(new Set(round.choiceIds).size, 3)
    assert.ok(round.choiceIds.includes(round.targetId))
    if (previous) assert.notEqual(round.targetId, previous)
    previous = round.targetId
  }

  previous = ""
  for (let index = 0; index < 20; index += 1) {
    const round = colorRound(colors, previous)
    assert.equal(new Set(round.choiceIds).size, 3)
    assert.ok(round.choiceIds.includes(round.targetId))
    if (previous) assert.notEqual(round.targetId, previous)
    previous = round.targetId
  }
})

test("counting rounds show a count that is one of the answers", () => {
  let previous = 0
  for (let index = 0; index < 30; index += 1) {
    const round = countRound(previous)
    assert.ok(round.count >= 1 && round.count <= 5)
    assert.equal(round.options.length, 3)
    assert.ok(round.options.includes(round.count))
    assert.equal(new Set(round.options).size, 3)
    if (previous) assert.notEqual(round.count, previous)
    previous = round.count
  }
})

test("Arabic translations cover every English string", () => {
  const english = new Set(leafKeys(translations.en))
  const arabic = new Set(leafKeys(translations.ar))
  const missing = [...english].filter((key) => !arabic.has(key))
  const extra = [...arabic].filter((key) => !english.has(key))
  assert.deepEqual(missing, [])
  assert.deepEqual(extra, [])
})

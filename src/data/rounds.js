function shuffle(list) {
  const copy = [...list]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[swap]] = [copy[swap], copy[index]]
  }
  return copy
}

function pickDifferent(list, previousId) {
  const pool = list.filter((item) => item.id !== previousId)
  const source = pool.length ? pool : list
  return source[Math.floor(Math.random() * source.length)]
}

export function animalRound(animals, previousId) {
  const target = pickDifferent(animals, previousId)
  const others = shuffle(animals.filter((item) => item.id !== target.id)).slice(0, 2)
  return {
    targetId: target.id,
    choiceIds: shuffle([target, ...others]).map((item) => item.id),
  }
}

export function colorRound(colors, previousId) {
  const target = pickDifferent(colors, previousId)
  const others = shuffle(colors.filter((item) => item.id !== target.id)).slice(0, 2)
  return {
    targetId: target.id,
    choiceIds: shuffle([target, ...others]).map((item) => item.id),
  }
}

export function countRound(previousCount) {
  let count = 1 + Math.floor(Math.random() * 5)
  if (count === previousCount) count = count === 5 ? 1 : count + 1
  const options = new Set([count])
  while (options.size < 3) options.add(1 + Math.floor(Math.random() * 6))
  const objects = ["apple", "star", "flower", "ball", "fish"]
  return {
    count,
    object: objects[count - 1],
    options: shuffle([...options]),
  }
}

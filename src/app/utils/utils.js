export function swap(el, i, j) {
  return el.map((el, idx, array) => {
    if (idx === i) return array[j]
    if (idx === j) return array[i]
    return el
  })
}

export function renderPhrase(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
  ]
}

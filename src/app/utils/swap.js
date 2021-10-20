export default function swap(el, i, j) {
  return el.map((el, idx, array) => {
    if (idx === i) return array[j]
    if (idx === j) return array[i]
    return el
  })
}

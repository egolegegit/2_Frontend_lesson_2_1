const generateItemFromAPI = (count) => {
  return new Array(count).fill('').map((_, index) => `Элемент ${index + 1}`)
}

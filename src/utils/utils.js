export function generateItemFromAPI(count) {
  return new Array(count).fill('').map((_, index) => `Элемент ${index + 1}`)
}

export function extractValue(value) {
  const users = {
    1: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    2: {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
  }

  // eslint-disable-next-line no-undef
  const names = _.map(users, 'name')
  console.log('names:', names)
}
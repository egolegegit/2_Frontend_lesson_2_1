import renderPhrase  from './renderPhrase'

const displayDate = (data) => {
  let displaydate = ''
  const dateNow = new Date()
  const diffData = dateNow - data
  // console.log('dateNow', dateNow, 'data', data)
  console.log('diffData', diffData)
  const timeScale = [
    { title: '1 минуту назад', rangeBefore: 0, rangeAfter: 60000 },
    { title: '5 минут назад', rangeBefore: 60000, rangeAfter: 300000 },
    { title: '10 минут назад', rangeBefore: 300000, rangeAfter: 600000 },
    { title: '30 минут назад', rangeBefore: 600000, rangeAfter: 1800000 },
    { title: 'hours.minutes', rangeBefore: 1800000, rangeAfter: 3600000 },
    { title: 'day.month', rangeBefore: 3600000, rangeAfter: 86400000 },
    { title: 'day.month.year', rangeBefore: 86400000, rangeAfter: 2592000000 },
  ]

    const yearsTitles = ['год', 'года', 'лет']
    const monthTitles = ['месяц', 'месяца', 'месяцев']
    const dayTitles = ['день', 'дня', 'дней']
    const hoursTitles = ['час', 'часа', 'часов']
    const minutesTitles = ['минута', 'минуты', 'минут']


  const isRange = (data, rangeBefore, rangeAfter) => {
    if (data >= rangeAfter && data <= rangeBefore) return true
    return false
  }

  let result

  for (const key in timeScale) {
    if (Object.hasOwnProperty.call(timeScale, key)) {
      const item = timeScale[key]
      if (isRange(diffData, item.rangeAfter, item.rangeBefore)) {
        result = item
        break
      }
    }
  }

  console.log(result)

  switch (result.title) {
    case '1 минуту назад':
      displaydate = '1 минуту назад'
      break

    case '5 минут назад':
      displaydate = '5 минут назад'
      break

    case '10 минут назад':
      displaydate = '10 минут назад'
      break

    case '30 минут назад':
      displaydate = '30 минут назад'
      break

    case 'hours.minutes':
      displaydate = Math.trunc(diffData / result.rangeAfter)
      break

    case 'day.month':
      displaydate = Math.trunc(diffData / result.rangeAfter)
      break

    case 'day.month.year':
      {
        console.log(result.rangeAfter)
        const years = Math.trunc(diffData / result.rangeAfter)
        const month = Math.trunc(diffData / result.rangeAfter)
        displaydate = `${years} ${renderPhrase(years, yearsTitles)}`
      }
      break
  }

  return displaydate
}
export default displayDate

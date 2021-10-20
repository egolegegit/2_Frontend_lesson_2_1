import renderPhrase from './renderPhrase'

const displayDate = (data) => {
  let displaydate = ''
  const dateNow = Date.now()
  const diffData = dateNow - data
  const timeScale = [
    { title: '1 минуту назад', rangeBefore: 0, rangeAfter: 60000 },
    { title: '5 минут назад', rangeBefore: 60000, rangeAfter: 300000 },
    { title: '10 минут назад', rangeBefore: 300000, rangeAfter: 600000 },
    { title: '30 минут назад', rangeBefore: 600000, rangeAfter: 1800000 },
    { title: 'hours.minutes', rangeBefore: 1800000, rangeAfter: 3600000 },
    { title: 'day.month', rangeBefore: 86400000, rangeAfter: 2592000000 },
    {
      title: 'day.month.year',
      rangeBefore: 2592000000,
      rangeAfter: 2592000000000000,
    },
  ]

  const yearsTitles = ['год', 'года', 'лет']
  const monthTitles = ['месяц', 'месяца', 'месяцев']
  const dayTitles = ['день', 'дня', 'дней']
  const hoursTitles = ['час', 'часа', 'часов']
  const minutesTitles = ['минута', 'минуты', 'минут']

  const isRange = (data, rangeBefore, rangeAfter) => {
    if (data > rangeAfter && data < rangeBefore) return true
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
      {
        const hours = diffData / result.rangeBefore
        const hoursTrunc = Math.trunc(hours)
        const minutes = Math.trunc(
          (diffData % result.rangeBefore) / result.rangeBefore
        )
        if (hoursTrunc) {
          displaydate = `${hoursTrunc} ${renderPhrase(hoursTrunc, hoursTitles)}`
        }
        if (minutes) {
          displaydate =
            displaydate + ` ${minutes} ${renderPhrase(minutes, minutesTitles)}`
        }

        displaydate = displaydate + ' назад'
      }
      break

    case 'day.month':
      {
        const month = diffData / result.rangeBefore
        const monthTrunc = Math.trunc(month)
        const day = Math.trunc(
          (diffData % result.rangeBefore) / result.rangeBefore
        )
        if (monthTrunc) {
          displaydate = `${monthTrunc} ${renderPhrase(monthTrunc, monthTitles)}`
        }
        if (day) {
          displaydate = displaydate + ` ${day} ${renderPhrase(day, dayTitles)}`
        }

        displaydate = displaydate + ' назад'
      }
      break

    case 'day.month.year':
      {
        const years = Math.trunc(diffData / result.rangeBefore)
        const yearsTrunc = Math.trunc(years)
        const month = Math.trunc(
          (diffData % result.rangeBefore) / result.rangeBefore
        )
        if (yearsTrunc) {
          displaydate = `${yearsTrunc} ${renderPhrase(yearsTrunc, yearsTitles)}`
        }
        if (month) {
          displaydate =
            displaydate + ` ${month} ${renderPhrase(month, monthTitles)}`
        }

        displaydate = displaydate + ' назад'
      }
      break
  }

  return displaydate
}
export default displayDate

const displayDate = (data) => {
  let displaydate = ''
  const dateNow = new Date()
  const diffData = dateNow - data
  // console.log('dateNow', dateNow, 'data', data)
  // console.log('diffData', diffData)
  const timeScale = [
    { title: '1 минуту назад', rangeBefore: 0, rangeAfter: 60000 },
    { title: '5 минут назад', rangeBefore: 60000, rangeAfter: 300000 },
    { title: '10 минут назад', rangeBefore: 300000, rangeAfter: 600000 },
    { title: '30 минут назад', rangeBefore: 600000, rangeAfter: 1800000 },
    { title: 'hours.minutes', rangeBefore: 1800000, rangeAfter: 3600000 },
    { title: 'day.month', rangeBefore: 3600000, rangeAfter: 86400000 },
    { title: 'day.moth.year', rangeBefore: 86400000, rangeAfter: 2592000000 },
  ]

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
  // console.log(result)

  switch (result.title) {
    case 'day.moth.year':
      displaydate = Math.trunc(diffData / result.rangeAfter)
      break

    // default:
    //   break
  }

  return displaydate


}
export default displayDate

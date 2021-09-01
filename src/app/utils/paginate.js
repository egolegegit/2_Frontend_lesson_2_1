import _ from 'lodash'

export default function paginate(array, page, pageSize) {
  const startIdx = (page - 1) * pageSize

  return _(array).slice(startIdx).take(pageSize).value()
}

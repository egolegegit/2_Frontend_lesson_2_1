import _ from 'lodash'

export default function searchBySubString(data, searchString) {
  return _.filter(data, function (item) {
    return item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
  })
}

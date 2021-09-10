import React from 'react'
import { PropTypes } from 'prop-types'

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onitemSelect,
  selectedItem,
}) => {
  const sortItems = Object.keys(items).sort((a, b) => {
    const nameA = items[a].name.toLowerCase()
    const nameB = items[b].name.toLowerCase()
    if (nameA < nameB) {
      return -1
    }

    if (nameA > nameB) {
      return 1
    }
    return 0
  })

  return (
    <ul className="list-group">
      {sortItems.map((item) => (
        <li
          key={items[item][valueProperty]}
          className={
            'list-group-item list-group-item-action' +
            (items[item] === selectedItem ? ' active' : '')
          }
          onClick={() => onitemSelect(items[item])}
          role="button"
        >
          {items[item][contentProperty]}
        </li>
      ))}
    </ul>
  )
}

GroupList.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name',
}

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onitemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
}

export default GroupList

import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const TableBody = ({ data, columns }) => {
  const renderContent = (item, column) => {
    if (columns[column].component) {
      const component = columns[column].component
      if (typeof component === 'function') {
        return component(item)
      }
      return component
    }
    return _.get(item, columns[column].path)
  }

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id} className="dark:text-white dark:border-green-300 dark:hover:bg-gray-600 dark:hover:text-white" >
          {Object.keys(columns).map((column) => (
            <td className={columns[column].classname} key={column}>
              {renderContent(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

TableBody.propTypes = {
  columns: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
}

export default TableBody

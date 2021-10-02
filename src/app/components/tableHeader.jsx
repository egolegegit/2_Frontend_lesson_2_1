import React from 'react'
import SortIcon from './sortIcon/sortIcon'
import PropTypes from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columns, getThead }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc',
      })
    } else {
      onSort({ path: item, order: 'asc' })
    }
  }

  return (
    <thead>
      <tr className="dark:text-green-300">
        {Object.keys(columns).map((column) => (
          <th
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            scope={'col'}
            {...{ role: columns[column].path && 'button' }}
            key={column}
          >
            <span>
              {columns[column].name}
              {columns[column].path &&
                columns[column].path === selectedSort.path && (
                  <SortIcon selectedSort={selectedSort} />
                )}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
  getThead: PropTypes.array,
}

export default TableHeader

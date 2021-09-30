import SortIcon from './sortIcon'
import PropTypes from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc'
      })
    } else {
      onSort({ path: item, order: 'asc' })
    }
  }

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            onClick={columns[column].path ? () => handleSort(columns[column].path) : undefined}
            scope={'col'}
            {...{ role: columns[column].path && 'button' }}
            key={column}>
            {columns[column].name}
            {columns[column].path && columns[column].path === selectedSort.path && (
              <SortIcon selectedSort={selectedSort} />
            )}
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
  getThead: PropTypes.array
}

export default TableHeader

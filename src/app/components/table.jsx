import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

const Table = ({ onSort, selectedSort, columns, data }) => {
  return (
    <table className="table table-hover">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data }} />
    </table>
  )
}

Table.propTypes = {
  onSort: PropTypes.func,
  data: PropTypes.array,
  selectedSort: PropTypes.object,
  columns: PropTypes.object,
}

export default Table

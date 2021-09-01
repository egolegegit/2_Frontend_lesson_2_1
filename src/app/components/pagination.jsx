import React from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

const Pagination = ({ onPageChange, itemsCount, pageSize, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  const pages = _.range(1, pageCount + 1)

  if (pageCount === 1) {
    return null
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pages.map((page, i) => (
          <li
            key={i}
            className={'page-item ' + (page === currentPage ? 'active' : '')}
            onClick={() => onPageChange(page)}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default Pagination

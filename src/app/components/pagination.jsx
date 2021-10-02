import React from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

const Pagination = ({ onPageChange, userCount, pageSize, currentPage }) => {
  const pageCount = Math.ceil(userCount / pageSize)
  const pages = _.range(1, pageCount + 1)

  if (pageCount === 1) {
    return null
  }

  return (
    <nav aria-label="Page navigation example" className="pt-4">
      <ul className="pagination justify-content-center">
        {pages.map((page, i) => (
          <li
            key={i}
            className={
              'px-3 py-2 rounded dark:hover:bg-gray-600 hover-link' +
              (page === currentPage
                ? 'dark:focus:text-green-200 dark:bg-gray-600 bg-gray-300'
                : '')
            }
            onClick={() => onPageChange(page)}
            role="button"
          >
            <a className="no-underline dark:text-white">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  userCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default Pagination

import React from 'react'
import { renderPhrase } from '../utils/utils'
import PropTypes from 'prop-types'

const SearchStatus = ({ count }) => {
  const titles = ['человек', 'человека', 'человек']

  let classesTitle =
    'rounded border-transparent text-white py-1 px-2 flex align-center whitespace-nowrap'
  classesTitle += count !== 0 ? ' bg-blue-600' : ' bg-red-600'
  const texTitle =
    count !== 0
      ? `${count} ${renderPhrase(count, titles)} тусанется сегодня с тобой `
      : 'Никто с тобой не тусанет'
  return (
    <h5>
      <span className={`${classesTitle}`}>{texTitle}</span>
    </h5>
  )
}

SearchStatus.propTypes = {
  count: PropTypes.number.isRequired,
}

export default SearchStatus

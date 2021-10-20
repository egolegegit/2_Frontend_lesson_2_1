import React from 'react'
import renderPhrase from '../../utils/renderPhrase'
import PropTypes from 'prop-types'

const SearchStatus = ({ count }) => {
  const titles = ['человек', 'человека', 'человек']

  let classesTitle =
    'rounded border-transparent dark:text-white py-1 px-2 flex align-center whitespace-nowrap dark:bg-gray-600'
  classesTitle += count !== 0 ? ' bg-gray-300' : ' bg-red-600 text-white'
  const texTitle =
    count !== 0
      ? `${count} ${renderPhrase(count, titles)} тусанется сегодня с тобой `
      : 'Никто с тобой не тусанет'
  return (
    <h5 className="ml-[7.5rem]">
      <span className={`${classesTitle}`}>{texTitle}</span>
    </h5>
  )
}

SearchStatus.propTypes = {
  count: PropTypes.number.isRequired,
}

export default SearchStatus

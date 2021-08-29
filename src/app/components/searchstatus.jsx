import React from 'react'
import { renderPhrase } from '../../utils'

const SearchStatus = ({users}) => {
  const titles = ['человек', 'человека', 'человек']

  let classesTitle = 'badge bg-'
  classesTitle += users.length !== 0 ? 'primary' : 'danger'
  const texTitle =
    users.length !== 0
      ? `${users.length} ${renderPhrase(
          users.length,
          titles
        )} тусанется сегодня с тобой `
      : 'Никто с тобой не тусанет'
  return (
    <h4>
      <span className={`badge bg-${classesTitle}`}>{texTitle}</span>
    </h4>
  )
}
export default SearchStatus

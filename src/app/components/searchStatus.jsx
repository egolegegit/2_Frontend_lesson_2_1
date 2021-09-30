import { renderPhrase } from '../utils/utils'
import PropTypes from 'prop-types'

const SearchStatus = ({ count }) => {
  const titles = ['человек', 'человека', 'человек']

  let classesTitle = 'badge bg-'
  classesTitle += count !== 0 ? 'primary' : 'danger'
  const texTitle =
    count !== 0
      ? `${count} ${renderPhrase(count, titles)} тусанется сегодня с тобой `
      : 'Никто с тобой не тусанет'
  return (
    <h4>
      <span className={`badge bg-${classesTitle}`}>{texTitle}</span>
    </h4>
  )
}

SearchStatus.propTypes = {
  count: PropTypes.number.isRequired
}

export default SearchStatus

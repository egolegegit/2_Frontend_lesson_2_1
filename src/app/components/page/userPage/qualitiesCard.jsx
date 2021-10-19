import React from 'react'
import Qualities from '../../ui/qualities'
import PropTypes from 'prop-types'

const QualitiesCard = ({ user }) => {
  return (
    <div className="mb-3 card">
      <div className="h-full text-center card-body dark:bg-gray-700 d-flex flex-column justify-content-bg-center">
        <h5 className="card-title dark:text-white">
          <span>Qualities</span>
        </h5>
        <p className="card-text">
          <Qualities qualities={user.qualities} />
        </p>
      </div>
    </div>
  )
}

QualitiesCard.propTypes = {
  user: PropTypes.object,
}

export default QualitiesCard

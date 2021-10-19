import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Gear from '../../../assets/svg/Gear'

const InfoCard = ({ user }) => {
  const history = useHistory()
  return (
    <div className="mb-3 card">
      <button
        className="top-0 p-1 border-transparent rounded position-absolute end-0 dark:hover:bg-gray-500 border-1"
        onClick={() => history.push(`/users/${user._id}/edit`)}
      >
        <Gear />
      </button>

      <div className="card-body dark:bg-gray-700">
        <div className="text-center d-flex flex-column align-items-center position-relative">
          <img
            src={`https://avatars.dicebear.com/api/avataaars/${(
              Math.random() + 1
            )
              .toString(36)
              .substring(7)}.svg`}
            className="rounded-circle shadow-1-strong me-3"
            alt="avatar"
            width="150"
            height="150"
          />
          <div className="mt-3">
            <h4 className="dark:text-white">{user.name}</h4>
            <p className="mb-1 dark:text-gray-300">{`${user.profession.name}`}</p>
            <div className="text-muted">
              <i
                className="bi bi-caret-down-fill text-primary"
                role="button"
              ></i>
              <i className="bi bi-caret-up " role="button"></i>
              <span className="ms-2 dark:text-gray-300">{`${user.rate}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

InfoCard.propTypes = {
  user: PropTypes.object,
}

export default InfoCard

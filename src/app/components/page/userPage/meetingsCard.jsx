import React from 'react'
import PropTypes from 'prop-types'

const MeetingsCard = ({ user }) => {
  return (
    <div className="mb-3 card">
      <div className=" card">
        <div className="text-center card-body dark:bg-gray-700 d-flex flex-column justify-content-center dark:text-gray-300">
          <h5 className="card-title">
            <span>Completed meetings</span>
          </h5>
          <h1 className="display-1">{`${user.completedMeetings}`}</h1>
        </div>
      </div>
    </div>
  )
}

MeetingsCard.propTypes = {
  user: PropTypes.object,
}

export default MeetingsCard

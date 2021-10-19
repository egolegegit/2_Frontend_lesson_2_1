import React from 'react'
import PropTypes from 'prop-types'
import displayDate from '../../../utils/displayDate'
import Delete from '../../../assets/svg/Delete'

const Comment = ({ user, comment, onDelete }) => {
  return (
    <div className="relative mb-3 bg-gray-100 border-transparent rounded border-1 card-body dark:bg-gray-600">
      <button
        className="top-0 border-transparent rounded position-absolute end-0 dark:hover:bg-gray-500 hover:bg-gray-300 border-1"
        onClick={() => onDelete(comment._id)}
      >
        <Delete />
      </button>

      <div className="row">
        <div className="col">
          <div className="d-flex flex-start">
            <img
              src="https://avatars.dicebear.com/api/avataaars/qweqasdas.svg"
              className="rounded-circle shadow-1-strong me-3"
              alt="avatar"
              width="65"
              height="65"
            />
            <div className="flex-grow-1 flex-shrink-1">
              <div className="mb-4">
                <div className=" d-flex justify-content-between align-items-center">
                  <p className="mb-1">
                    {user.name}
                    <span className="small ps-4">
                      {displayDate(comment.created_at)}
                    </span>
                  </p>
                  <button className=" btn btn-sm text-primary d-flex align-items-center">
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
                <p className="mb-0 small">{comment.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Comment.propTypes = {
  user: PropTypes.object,
  comment: PropTypes.object,
  onDelete: PropTypes.func,
}

export default Comment

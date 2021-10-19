import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({ user, comment }) => {
  return (
    <div className="mb-3 card-body dark:bg-gray-700">
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
                    <span className="small"> 5 минут назад </span>
                  </p>
                  <button className=" btn btn-sm text-primary d-flex align-items-center">
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
                <p className="mb-0 small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, soluta facilis fugit hic quasi sapiente accusamus
                  quia voluptatem dolorum laboriosam id iste voluptas modi animi
                  eius voluptatum adipisci amet officiis.
                </p>
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
}

export default Comment

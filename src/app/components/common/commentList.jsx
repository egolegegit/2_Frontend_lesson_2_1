import React from 'react'
import PropTypes from 'prop-types'
import api from '../../api/index'
import Comment from '../common/comment/comment '

const CommentList = ({ users, user, comments, setComments }) => {
  const onDelete = (commentId) => {
    setComments(comments.filter((item) => item._id !== commentId))
    api.comments.remove(commentId)
  }

  return (
    <div className="mb-3 card">
      <div className="card-body dark:bg-gray-700 dark:text-white">
        <h2>Comments</h2>
        <hr />
        {comments &&
          comments.map((comment, idx) => (
            <Comment
              key={idx}
              users={users}
              user={user}
              comment={comment}
              onDelete={onDelete}
            />
          ))}
      </div>
    </div>
  )
}

CommentList.propTypes = {
  user: PropTypes.object,
  comments: PropTypes.array,
  users: PropTypes.array,
  setComments: PropTypes.func,
}

export default CommentList

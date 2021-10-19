import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import api from '../../api/index'
import Comment from '../common/comment/comment '

const CommentList = ({ user }) => {
  const [comments, setComments] = useState()

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const data = await api.comments.fetchCommentsForUser(user._id)
        setComments(() => data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchComment()
  }, [user._id])

  const onDelete = (commentId) => {
    console.log(commentId)
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
}

export default CommentList

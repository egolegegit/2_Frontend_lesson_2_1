import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import api from '../../../api'
import { validator } from '../../../utils/validator'
import SelectedField from '../../common/form/selectedField'
import TextAreaField from '../form/textAreaField'

const NewComment = ({ users, userId, setComments }) => {
  const [data, setData] = useState({ user: '', content: '' })
  const [errors, setErrors] = useState({})

  const fetchComment = async () => {
    try {
      const data = await api.comments.fetchCommentsForUser(userId)
      setComments(() => data)
    } catch (error) {
      console.error(error)
    }
  }

  const validatorConfig = {
    user: {
      isRequired: { message: '* Please enter the author of the comment' },
    },
    content: {
      isRequired: {
        message: '* Please enter comment',
      },
    },
  }

  const getId = (arr, name) => {
    return arr.filter(function (item) {
      return item.name == name
    })
  }

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const validate = () => {
    const errors = validator(data, validatorConfig)

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()

    if (!isValid) return

    const newComment = {
      pageId: userId,
      userId: getId(users, data.user)[0]._id,
      content: data.content,
    }

    api.comments.add(newComment)

    fetchComment()

    setData({ user: '', content: '' })
  }

  useEffect(() => {
    validate()
  }, [data])

  return (
    <div className="mb-2 card">
      <form
        onSubmit={handleSubmit}
        className="card-body dark:bg-gray-700 dark:text-white"
      >
        <div>
          <h2>New comment</h2>
          <div className="mb-4">
            <SelectedField
              className="form-select"
              label="Author"
              defaultOption="select author..."
              id="validationCustom09"
              name="user"
              value={data.user}
              options={users}
              error={errors.user}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <TextAreaField
              label="Message"
              name="content"
              rows="3"
              value={data.content}
              error={errors.content}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-2 col-md-3">
          <button
            disabled={!isValid}
            className="w-full mt-2 btn btn-primary "
            onClick={() => null}
            title="add comment"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  )
}

NewComment.propTypes = {
  users: PropTypes.array,
  userId: PropTypes.string,
  setComments: PropTypes.func,
}

export default NewComment

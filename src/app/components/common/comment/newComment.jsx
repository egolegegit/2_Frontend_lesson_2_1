import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import api from '../../../api'
import { validator } from '../../../utils/validator'
import SelectedField from '../../common/form/selectedField'
import TextAreaField from '../form/textAreaField'

const NewComment = ({ userId }) => {
  const [data, setData] = useState({ user: '', comment: '' })
  const [users, setUsers] = useState()
  const [errors, setErrors] = useState({})

  useEffect(() => {
    // api.users.fetchAll().then((data) => setUsers(() => data))
    // use async/await variant
    const fetchUsers = async () => {
      try {
        const data = await api.users.fetchAll()
        setUsers(() => data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUsers()
  }, [])

  const validatorConfig = {
    user: {
      isRequired: { message: '* Please enter the author of the comment' },
    },
    comment: {
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
      [target.name]:
        target.name === 'user'
          ? getId(users, target.value)[0]._id
          : target.value,
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
    console.log(data, 'userId', userId)
  }

  useEffect(() => {
    validate()
  }, [data])

  console.log(data)

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
              label="user"
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
              name="comment"
              rows="3"
              value={data.value}
              error={errors.comment}
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
  userId: PropTypes.string,
}

export default NewComment

import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../../api'
import { validator } from '../../../utils/validator'
import TextField from '../../common/form/textField'
import SelectedField from '../../common/form/selectedField'
import RadioField from '../../common/form/radioField'
import MultiSelectField from '../../common/form/multiSelectField'

import Loader from '../../../components/common/loader'

const UserEditPage = () => {
  const params = useParams()
  const { userId } = params
  const [data, setData] = useState()
  const [professions, setProfessions] = useState()
  const [qualities, setQualities] = useState({})
  const [errors, setErrors] = useState({})
  const [updateForm, setUpdateForm] = useState({
    updateProfession: false,
    updateQualities: false,
  })
  const history = useHistory()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await api.users.getById(userId)
        setData((prevState) => ({
          ...prevState,
          sex: 'male',
          email: '',
          ...userData,
        }))
      } catch (error) {
        console.error(error)
      }
    }

    fetchUser()
  }, [userId])

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data))
    api.qualities.fetchAll().then((data) => setQualities(data))
  }, [])

  useEffect(() => {
    validate()
  }, [data])

  const validatorConfig = {
    name: {
      isRequired: { message: '* Please enter a you name' },
    },
    email: {
      isRequired: { message: '* Please enter a valid email address' },
      isEmail: { message: 'Email address entered incorrectly' },
    },
  }

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))

    if (target.name === 'profession') {
      setUpdateForm((prevState) =>
        !prevState.updateProfession
          ? { ...prevState, updateProfession: true }
          : { ...prevState, updateProfession: true }
      )
    }

    if (target.name === 'qualities') {
      setUpdateForm((prevState) =>
        !prevState.updateQualities
          ? { ...prevState, updateQualities: true }
          : { ...prevState, updateQualities: true }
      )
    }
  }

  const validate = () => {
    const errors = validator(data, validatorConfig)

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const transformQualities = () => {
    const temp = data.qualities.map((item) => {
      return (item = item.value)
    })

    const transform = Object.values(qualities).filter((item) => {
      if (temp.includes(item._id)) {
        return item
      }
    })
    return transform
  }

  const transformProfessions = () => {
    const transform = Object.values(professions).filter((item) => {
      if (item._id === data.profession) {
        return item
      }
    })
    return transform
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return

    if (updateForm.updateQualities) {
      data.qualities = transformQualities()
    }

    if (updateForm.updateProfession) {
      data.profession = transformProfessions()[0]
    }

    api.users.update(data._id, data)
    console.log('data', data)
    history.push(`/users/${data._id}`)
  }

  if (data) {
    return (
      <div className="pt-40 layout-content">
        <div className="flex flex-col items-center w-full p-10 rounded shadow wrapper-form sm:w-2/3 md:w-2/5 lg:w-2/6 dark:border-green-400 border-1">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full "
          >
            <TextField
              label="Имя"
              name="name"
              value={data.name}
              onChange={handleChange}
              error={errors.name}
            />

            <TextField
              label="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
            <SelectedField
              className="form-select"
              label="Выберите вашу профессию"
              defaultOption="Choose..."
              id="validationCustom05"
              name="profession"
              value={data.profession._id}
              options={professions}
              error={errors.profession}
              onChange={handleChange}
            />

            <RadioField
              label="Выберите ваш пол"
              name="sex"
              options={[
                { name: 'Male', value: 'male' },
                { name: 'FeMale', value: 'Female' },
                { name: 'Other', value: 'other' },
              ]}
              value={data.sex}
              onChange={handleChange}
            />

            <MultiSelectField
              defaultValue={data.qualities}
              options={qualities}
              onChange={handleChange}
              name="qualities"
              label="Выберите ваши качества"
            />

            <button
              disabled={!isValid}
              className={` 
            bg-gray-400 mt-8 border rounded border-transparent p-2 hover:text-white w-3/4 text-white dark:bg-gray-600 ${
              isValid ? 'hover:bg-blue-700 text-white animate-pulse' : ''
            } 
          `}
            >
              update
            </button>
          </form>
        </div>
      </div>
    )
  }
  return <Loader />
}

export default UserEditPage

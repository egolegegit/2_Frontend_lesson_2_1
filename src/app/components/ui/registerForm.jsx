import React, { useState, useEffect } from 'react'
import { validator } from '../../utils/validator'
import api from '../../api'
import TextField from '../common/form/textField'
import SelectedField from '../common/form/selectedField'

const RegisterForm = () => {
  const [data, setData] = useState({ email: '', password: '', profession: '' })
  const [professions, setProfessions] = useState()
  const [errors, setErrors] = useState({})

  const validatorConfig = {
    email: {
      isRequired: { message: '* Please enter a valid email address' },
      isEmail: { message: 'Email address entered incorrectly' },
    },
    password: {
      isRequired: { message: '* Please enter a valid password' },
      isCapitalSymbol: { message: 'Password must contain 1 capital letter' },
      isContainDigit: { message: 'password must contain at least 1 number' },
      isMin: {
        message: 'password must contain min 8 simbol',
        value: 8,
      },
    },
    profession: {
      isRequired: { message: '* Please enter a you profession' },
    },
  }

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
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
    console.log(errors, data)
  }

  useEffect(() => {
    validate()
  }, [data])

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full text-center"
    >
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Password"
        name="password"
        type={'password'}
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />

      <SelectedField
        className="form-select"
        label="Выберите вашу профессию"
        defaultOption="Choose..."
        id="validationCustom04"
        name="profession"
        value={data.profession}
        options={professions}
        error={errors.profession}
        onChange={handleChange}
      />

      {/* <div className="w-full my-4">
        <label
          htmlFor="validationCustom04"
          className="w-full text-left form-label"
        >
          Профессия
        </label>
        <select
          className="form-select"
          id="validationCustom04"
          name="profession"
          value={data.profession}
          onChange={handleChange}
        >
          <option disabled value="">
            Choose...
          </option>
          {professions &&
            professions.map((profession) => (
              <option key={profession._id} value={profession._id}>
                {profession.name}
              </option>
            ))}
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div> */}

      <button
        disabled={!isValid}
        className={` 
            bg-gray-400 mt-8 border rounded-xl border-transparent p-2 hover:text-white w-3/4 text-white dark:bg-gray-600 ${
              isValid ? 'hover:bg-blue-700 text-white animate-pulse' : ''
            } 
          `}
      >
        Submit
      </button>
    </form>
  )
}

export default RegisterForm

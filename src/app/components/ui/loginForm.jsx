import React, { useState, useEffect } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

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
  }

  const validate = () => {
    const errors = validator(data, validatorConfig)

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  useEffect(() => {
    validate()
  }, [data])

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()

    if (!isValid) return
    console.log(errors, data)
  }

  return (
    <div className="pt-40 layout-content">
      <div className="flex flex-col items-center w-full rounded shadow p-14 wrapper-form sm:w-2/3 md:w-2/5 lg:w-2/6 dark:border-green-400 border-1">
        <h2>Login</h2>
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
            label="password"
            name="password"
            type={'password'}
            value={data.password}
            onChange={handleChange}
            error={errors.password}
          />
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
      </div>
    </div>
  )
}

export default LoginForm

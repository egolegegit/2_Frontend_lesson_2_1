import React, { useState, useEffect } from 'react'
import TextField from '../components/textField'
import { validator } from '../utils/validator'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const validatorConfig = {
    email: {
      isRequired: { message: 'Please enter a valid email address' },
      isEmail: { message: 'Email address entered incorrectly' },
    },
    password: {
      isRequired: { message: 'Please enter a valid password' },
      isCapitalSymbol: { message: 'Password must contain 1 capital letter' },
      isContainDigit: { message: 'password must contain at least 1 number' },
      isMin: {
        message: 'password must contain min 8 simbol',
        value: 8,
      },
    },
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()

    if (!isValid) return
    console.log(errors, data)
  }

  return (
    <form onSubmit={handleSubmit}>
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
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <button>Submit</button>
    </form>
  )
}

export default Login

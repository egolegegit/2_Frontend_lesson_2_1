import React, { useState, useEffect } from 'react'
import TextField from '../components/textField'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState()

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = {}
    for (const fieldName in data) {
      if (data[fieldName].trim() === '') {
        errors[fieldName] = `${fieldName} is required`
      }
    }
    setErrors(errors)
    return Object.keys(errors).length === 0 || false
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
      />
      <TextField
        label="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default Login

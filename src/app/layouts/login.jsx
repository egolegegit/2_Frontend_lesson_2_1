import React, { useState } from 'react'
import TextField from '../components/textField'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })

  const handleChange = ({ target }) => {
    console.log(target.value)
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  return (
    <form action="">
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <TextField
        label="password"
        type="text"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
    </form>
  )
}

export default Login

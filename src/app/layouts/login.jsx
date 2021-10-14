import React, { useState } from 'react'
import { useParams } from 'react-router'
import LoginForm from '../components/ui/loginForm'
import RegisterForm from '../components/ui/registerForm'

const Login = () => {
  const { type } = useParams
  const [formType, setFormType] = useState(type === 'login' ? type : 'login')

  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === 'register' ? 'logig' : 'register'
    )
  }

  return (
    <div className="pt-40 layout-content">
      <div className="flex flex-col items-center w-full rounded shadow p-14 wrapper-form sm:w-2/3 md:w-2/5 lg:w-2/6 dark:border-green-400 border-1">
        <h2>Login</h2>
        {formType === 'register' ? (
          <>
            <span>
              Already have account?
              <a role="button" onClick={toggleFormType}>
                Sign In
              </a>
            </span>
            <RegisterForm />
          </>
        ) : (
          <>
            <span>
              Dont have account?
              <a role="button" onClick={toggleFormType}>
                Sign UP
              </a>
            </span>
            <LoginForm />
          </>
        )}
      </div>
    </div>
  )
}

export default Login

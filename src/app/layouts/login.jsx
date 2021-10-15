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
      <div className="flex flex-col items-center w-full p-10 rounded shadow wrapper-form sm:w-2/3 md:w-2/5 lg:w-2/6 dark:border-green-400 border-1">
        {formType === 'register' ? (
          <>
            <h2>Register</h2>
            <RegisterForm />{' '}
            <div className="flex justify-between w-full pt-4">
              <span>Already have account?</span>
              <a
                role="button"
                onClick={toggleFormType}
                className="no-underline dark:text-white dark:hover:text-gray-300"
              >
                Sign In
              </a>
            </div>
          </>
        ) : (
          <>
            <h2>Login</h2>
            <LoginForm />
            <div className="flex justify-between w-full pt-4">
              Dont have account?
              <a
                role="button"
                onClick={toggleFormType}
                className="no-underline dark:text-white dark:hover:text-gray-300"
              >
                Sign Up
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Login

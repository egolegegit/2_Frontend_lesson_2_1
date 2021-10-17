import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const getInputClasses = () => {
    return ` ${error ? 'is-invalid' : ''}`
  }

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="w-full mt-3 text-start">
        {label}
      </label>

      <div className="input-group">
        <input
          type={showPassword ? 'text' : type}
          id={name}
          name={name}
          value={value}
          placeholder={`${placeholder || name}`}
          onChange={onChange}
          className={getInputClasses()}
        />

        {type === 'password' && !error && (
          <button
            className="show-password"
            type="button"
            title="show password"
            onClick={toggleShowPassword}
          />
        )}
      </div>
      <span className="h-6 pt-1 text-red-400 text-start dark:text-red-300">
        {error}
      </span>
    </div>
  )
}

TextField.defaultProps = { type: 'text' }

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default TextField

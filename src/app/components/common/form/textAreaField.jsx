import React from 'react'
import PropTypes from 'prop-types'

const TextAreaField = ({ label, name, value, row, onChange, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }

  const getInputClasses = () => {
    return `border rounded form-control dark:border-green-400 dark:bg-gray-600 dark:text-white ${
      error ? ' is-invalid' : ''
    }`
  }

  return (
    <div>
      <label htmlFor={name} className="form-label dark:text-white">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={row}
        value={value}
        onChange={handleChange}
        className={getInputClasses()}
      />
      <span className="h-6 mt-4 text-red-400 text-start dark:text-red-300">
        {error}
      </span>
    </div>
  )
}

TextAreaField.defaultProps = { row: '3' }

TextAreaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  row: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default TextAreaField

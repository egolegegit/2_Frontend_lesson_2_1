import React from 'react'
import PropTypes from 'prop-types'

const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value })
  }

  const getInputClasses = () => {
    return `flex items-center w-full  form-check ${error ? 'is-invalid' : ''}`
  }

  return (
    <div className="flex flex-col w-full text-sm">
      <div className={getInputClasses()}>
        <input
          className={' me-2'}
          type="checkbox"
          value=""
          id={name}
          onChange={handleChange}
          checked={value}
        />
        <label className="form-check-label" htmlFor={name}>
          {children}
        </label>
      </div>

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.string,
}

export default CheckBoxField

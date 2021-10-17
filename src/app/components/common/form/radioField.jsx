import React from 'react'
import PropTypes from 'prop-types'

const RadioField = ({ label, name, value, options, onChange }) => {
  return (
    <div className="my-4">
      <label className="w-full text-left form-label">{label}</label>

      {options &&
        options.map((option, idx) => (
          <div key={idx} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              checked={option.value === value}
              name={name}
              id={option.name + '_' + option.value}
              value={option.value}
              onChange={onChange}
            />
            <label
              className="form-check-label"
              htmlFor={option.name + '_' + option.value}
            >
              {option.name}
            </label>
          </div>
        ))}
    </div>
  )
}

RadioField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default RadioField

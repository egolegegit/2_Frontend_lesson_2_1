import React from 'react'
import PropTypes from 'prop-types'

const SelectedField = ({
  label,
  name,
  value,
  onChange,
  defaultOption,
  options,
  error,
}) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }

  const getSelectClasses = () => {
    return `${error ? ' ' : ''}`
  }

  return (
    <div className="flex flex-col w-full my-4">
      <label
        htmlFor="validationCustom04"
        className="w-full text-left form-label"
      >
        {label}
      </label>
      <select
        className={getSelectClasses()}
        id="validationCustom04"
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {error && (
        <span className="h-6 pt-1 text-red-400 text-start dark:text-red-300">
          {error}
        </span>
      )}
    </div>
  )
}

SelectedField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default SelectedField

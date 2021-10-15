import React from 'react'
import PropTypes from 'prop-types'

const SelectedField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  error,
}) => {
  const optionsArray =
    !Array.isArray(options) && typeof option === 'object'
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options

      console.log();

  const getInputClasses = () => {
    return `w-full h-8 px-2 py-3 mt-1 border-gray-300 dark:border-green-400 rounded border-1 bg-transparent dark:text-gray-700 dark:focus:border-green-400  outline-none ${
      error ? 'border-red-400 focus:border-red-500 ' : 'border-gray-400'
    }`
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
        className={getInputClasses() + ''}
        id="validationCustom04"
        name="profession"
        value={value}
        onChange={onChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map((option) => (
            <option key={option._id} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {error && (
        <span className="h-4 pt-1 text-red-400 text-start dark:text-red-300">
          {error}
        </span>
      )}
    </div>
  )
}

SelectedField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default SelectedField

import React from 'react'
import Select from 'react-select/'
import PropTypes from 'prop-types'

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          label: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options

  const defaultValueArray = Object.keys(defaultValue).map((optionName) => ({
    label: defaultValue[optionName].name,
    value: defaultValue[optionName]._id,
  }))

  const handleChange = (value) => {
    onChange({ name: name, value })
  }

  return (
    <div className="flex flex-col w-full my-4">
      <label className="w-full text-left form-label">{label}</label>
      <Select
        defaultValue={defaultValueArray}
        isMulti
        closeMenuOnSelect={false}
        options={optionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </div>
  )
}

MultiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.array,
  error: PropTypes.string,
}

export default MultiSelectField

import React from 'react'
import Select from 'react-select/'
import PropTypes from 'prop-types'

const MultiSelectField = ({ options, onChange, name }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          label: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options

  return (
    <Select
      options={optionsArray}
      className="w-full basic-multi-select"
      classNamePrefix="select"
      onChange={onChange}
      name={name}
    />
  )
}

MultiSelectField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default MultiSelectField

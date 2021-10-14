import React from 'react'
import PropTypes from 'prop-types'
import Qualitie from './qualitie'

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((el, idx) => (
        <Qualitie key={idx} qualitie={el} />
      ))}
    </>
  )
}
QualitiesList.propTypes = {
  qualities: PropTypes.array.isRequired,
}

export default QualitiesList

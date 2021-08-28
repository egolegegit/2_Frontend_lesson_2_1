import React from 'react'

const Qualitie = ({ qualitie }) => {
  return (
    <span key={qualitie._id} className={`badge bg-${qualitie.color} m-1`}>
      {qualitie.name}
    </span>
  )
}

export default Qualitie

import React from 'react'
import ArrowDropDown18px from './ArrowDropDown'
import ArrowUpDown from './ArrowUpDown'

const sortIcon = ({ selectedSort }) => {
  return (
    <>
      {selectedSort.order === 'asc' && <ArrowDropDown18px title={''} />}
      {selectedSort.order === 'desc' && <ArrowUpDown />}
    </>
  )
}

export default sortIcon

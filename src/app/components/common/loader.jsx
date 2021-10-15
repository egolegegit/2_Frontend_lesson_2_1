import React from 'react'
const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center layout-content">
      <span className="fs-2 fw-bold pe-4 dark:text-white">Loading...</span>
      <div
        className="spinner-border dark:text-white"
        style={{ width: '2rem', height: '2rem' }}
        role="status"
      ></div>
    </div>
  )
}

export default Loader

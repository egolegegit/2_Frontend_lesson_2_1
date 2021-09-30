const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100">
      <span className="fs-2 fw-bold pe-4">Loading...</span>
      <div className="spinner-border" style={{ width: '2rem', height: '2rem' }} role="status"></div>
    </div>
  )
}

export default Loader

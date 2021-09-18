import React from 'react'
import Users from './components/users'

function App() {
  return <Users />

  // <>
  //   {!users && (
  //     <div className="d-flex align-items-center justify-content-center vw-100 vh-100">
  //       <span className="fs-2 fw-bold pe-4">Loading...</span>
  //       <div
  //         className="spinner-border"
  //         style={{ width: '2rem', height: '2rem' }}
  //         role="status"
  //       ></div>
  //     </div>
  //   )}

  //   {users && <Users />}
  // </>
}

export default App

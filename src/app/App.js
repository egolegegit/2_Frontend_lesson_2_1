import React, { useState, useEffect } from 'react'
import api from './api/index'
import Users from './components/users'

function App() {
  const [users, setUsers] = useState()

  useEffect(() => {
    // api.users.fetchAll().then((data) => setUsers(() => data))
    // use async/await variant
    const fetchUsers = async () => {
      const data = await api.users.fetchAll()
      setUsers(() => data)
    }

    fetchUsers()
  }, [])

  const handleDelete = (userId) => {
    setUsers(users.filter((item, id) => item._id !== userId))
  }

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
  }

  return (
    <>
      {!users && (
        <div className="d-flex align-items-center justify-content-center vw-100 vh-100">
          <span className="fs-2 fw-bold pe-4">Loading...</span>
          <div
            className="spinner-border"
            style={{ width: '2rem', height: '2rem' }}
            role="status"
          ></div>
        </div>
      )}

      {users && (
        <Users
          users={users}
          onDelete={handleDelete}
          onToggleBookMark={handleToggleBookMark}
        />
      )}
    </>
  )
}

export default App

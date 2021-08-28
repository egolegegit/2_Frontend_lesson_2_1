import React, { useState } from 'react'
import api from './api/index'
import SearchStatus from './components/searchstatus'
import Users from './components/users'

function App() {
  const [users, setUsers] = useState(api.users.fetchAll())

  

  const handleDelete = (userId) => {
    setUsers(users.filter((item, id) => item._id !== userId))
  }

  return (
    <>
      <SearchStatus users={users} />
      <Users users={users} onDelete={handleDelete} />
    </>
  )
}

export default App

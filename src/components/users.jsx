import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const { users, setUsers } = useState(api.users.fetchAll())

  const handleDelete = (userId) => {}

  const renderPhrase = () => {}

  return <h1>users</h1>
}

export default Users

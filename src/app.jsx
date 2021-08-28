import React, { useState } from 'react'
import api from './api/index'
import SearchStatus from './components/searchstatus'
import Users from './components/users'

function App() {
  const [users, setUsers] = useState(api.users.fetchAll())

  const usersIdBookmark = users.reduce((acc, obj) => {
    acc.push({ _id: obj._id, bookmark: false })
    return acc
  }, [])

  const [usersBookmarks, setUsersBookmarks] = useState(usersIdBookmark)

  const toogleBookmark = (id) => {
    const newUsersBookmarks = usersBookmarks.reduce((acc, obj) => {
      if (obj._id === id) obj.bookmark = !obj.bookmark
      acc.push(obj)
      return acc
    }, [])

    setUsersBookmarks(newUsersBookmarks)
  }

  const handleDelete = (userId) => {
    setUsers(users.filter((item, id) => item._id !== userId))
  }

  return (
    <>
      <SearchStatus users={users} />
      <Users
        users={users}
        onDelete={handleDelete}
        ontoogleBookmark={toogleBookmark}
        usersBookmarks={usersBookmarks}
      />
    </>
  )
}

export default App

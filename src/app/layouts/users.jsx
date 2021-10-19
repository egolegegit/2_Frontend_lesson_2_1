import React from 'react'
import { useParams } from 'react-router-dom'
import User from './user'
import UserListPage from '../components/page/usersListPage'

const Users = () => {
  const params = useParams()
  const { userId } = params

  return <>{userId ? <User /> : <UserListPage />}</>
}

export default Users

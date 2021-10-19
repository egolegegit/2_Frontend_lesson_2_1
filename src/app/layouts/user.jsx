import React from 'react'
import UserPage from '../components/page/userPage/userPage'

const User = () => {
  return (
    <div className="flex flex-col w-full p-4 user-conteiner">
      <div className="container">
        <div className="row gutters-sm">
          <UserPage />
        </div>
      </div>
    </div>
  )
}

export default User

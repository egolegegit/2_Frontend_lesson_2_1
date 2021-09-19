import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../api'
import Loader from './loader'
import Qualitie from './qualitie'

const UserPage = () => {
  const params = useParams()
  const { userId } = params
  const [user, setUser] = useState()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await api.users.getById(userId)
        setUser(() => data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUser()
  }, [userId])

  if (user) {
    return (
      <div className="d-flex flex-column p-4 vw-100 vh-100">
        <div className="card border-info mb-3 w-50">
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <h5 className="card-subtitle mb-2 text-muted">
              Качества:
              {user.qualities.map((el, idx) => (
                <Qualitie key={idx} qualitie={el} />
              ))}
            </h5>
            <h5>{`Профессия: ${user.profession.name}`}</h5>
            <h5>{`Кол-во встреч: ${user.completedMeetings}`}</h5>
            <h5>{`Оценка: ${user.rate}`}</h5>
            <Link className="mt-2 btn btn-secondary w-30" to="/users">
              Все пользователи
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return <Loader />
}

export default UserPage

import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from '../api'
import Loader from './loader'
import QualitiesList from './qualitiesList'

const UserPage = () => {
  const params = useParams()
  const history = useHistory()
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
      <div className="flex flex-col w-full p-4 user-conteiner">
        <div className="mb-3 w-50">
          <div className="rounded dark:text-white">
            <h2 className="card-title">{user.name}</h2>
            <h5 className="mb-2 card-subtitle dark:text-green-300">
              <span className="dark:text-green-300">Качества: </span>
              <QualitiesList qualities={user.qualities} />
            </h5>
            <h5>
              <span className="dark:text-green-300">Профессия: </span>
              {`${user.profession.name}`}
            </h5>
            <h5>
              <span className="dark:text-green-300">Кол-во встреч: </span>
              {`${user.completedMeetings}`}
            </h5>
            <h5>
              <span className="dark:text-green-300">Оценка: </span>
              {`${user.rate}`}
            </h5>
            {/* <Link className="mt-2 btn btn-secondary w-30" to="/users">
              Все пользователи
            </Link> */}
            <button
              className="mt-2 btn btn-secondary w-30"
              onClick={() => history.push('/users')}
            >
              Все пользователи
            </button>
          </div>
        </div>
      </div>
    )
  }
  return <Loader />
}

export default UserPage

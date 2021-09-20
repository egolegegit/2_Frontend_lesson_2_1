import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from '../api'
import Loader from './loader'
import Qualitie from './qualitie'

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
      <div className="p-4 d-flex flex-column vw-100 vh-100">
        <div className="mb-3 card border-info w-50">
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <h5 className="mb-2 card-subtitle text-muted">
              Качества:
              {user.qualities.map((el, idx) => (
                <Qualitie key={idx} qualitie={el} />
              ))}
            </h5>
            <h5>{`Профессия: ${user.profession.name}`}</h5>
            <h5>{`Кол-во встреч: ${user.completedMeetings}`}</h5>
            <h5>{`Оценка: ${user.rate}`}</h5>
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

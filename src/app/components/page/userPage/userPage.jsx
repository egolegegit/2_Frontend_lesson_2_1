import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../../api'
import Loader from '../../../components/common/loader'
import Qualities from '../../ui/qualities'

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
        <div className="flex w-full mb-3">
          <div className="w-1/2 rounded dark:text-white">
            <h2 className="mb-4 card-title dark:text-green-300">{user.name}</h2>
            <div className='flex'>
              <h5 className="dark:text-green-300">Качества: </h5>
              <h5 className="flex flex-wrap mb-2 card-subtitle dark:text-green-300">
                <Qualities qualities={user.qualities} />
              </h5>
            </div>
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
            <button
              className="mt-2 btn btn-secondary w-30 me-4"
              onClick={() => history.push(`/users/${user._id}/edit`)}
            >
              Изменить
            </button>

            <button
              className="mt-2 btn btn-secondary w-30"
              onClick={() => history.push('/users')}
              title="to the list users"
            >
              {'--->'}
            </button>
          </div>
        </div>
      </div>
    )
  }
  return <Loader />
}

export default UserPage

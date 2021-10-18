import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../../api'
import Gear from '../../../assets/svg/Gear'
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
          <div className="w-1/2 rounded dark:text-white"></div>
        </div>

        <div className="container">
          <div className="row gutters-sm">
            <button
              className="mt-2 btn btn-secondary w-30"
              onClick={() => history.push('/users')}
              title="to the list users"
            >
              {'--->'}
            </button>

            <div className="mb-3 col-md-4">
              <div className="mb-3 card">
                <div className="card-body dark:bg-gray-700">
                  <button
                    className="top-0 position-absolute end-0 btn btn-light btn-sm"
                    onClick={() => history.push(`/users/${user._id}/edit`)}
                  >
                    <Gear />
                  </button>
                  <div className="text-center d-flex flex-column align-items-center position-relative">
                    <img
                      src="https://avatars.dicebear.com/api/avataaars/qweqwdas.svg"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4 className="dark:text-white">{user.name}</h4>
                      <p className="mb-1 dark:text-gray-300">{`${user.profession.name}`}</p>
                      <div className="text-muted">
                        <i
                          className="bi bi-caret-down-fill text-primary"
                          role="button"
                        ></i>
                        <i className="bi bi-caret-up " role="button"></i>
                        <span className="ms-2 dark:text-gray-300">
                          {`${user.rate}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3 card">
                <div className="h-full text-center card-body dark:bg-gray-700 d-flex flex-column justify-content-bg-center">
                  <h5 className="card-title dark:text-white">
                    <span>Qualities</span>
                  </h5>
                  <p className="card-text">
                    <Qualities qualities={user.qualities} />
                  </p>
                </div>
              </div>
              <div className="mb-3 card">
                <div className=" card">
                  <div className="text-center card-body dark:bg-gray-700 d-flex flex-column justify-content-center dark:text-gray-300">
                    <h5 className="card-title">
                      <span>Completed meetings</span>
                    </h5>
                    <h1 className="display-1">{`${user.completedMeetings}`}</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="mb-2 card">
                <div className="card-body dark:bg-gray-700 dark:text-white">
                  <div>
                    <h2>New comment</h2>
                    <div className="mb-4">
                      <select className="form-select" name="userId" value="">
                        <option disabled value="" selected>
                          Выберите пользователя
                        </option>

                        <option>Доктор</option>
                        <option>Тусер</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label dark:text-white"
                      >
                        Сообщение
                      </label>
                      <textarea
                        className="border rounded form-control dark:border-green-400 dark:bg-gray-600 dark:text-white"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3 card">
                <div className="card-body dark:bg-gray-700 dark:text-white">
                  <h2>Comments</h2>
                  <hr />
                  <div className="mb-3 card-body dark:bg-gray-700">
                    <div className="row">
                      <div className="col">
                        <div className="d-flex flex-start">
                          <img
                            src="https://avatars.dicebear.com/api/avataaars/qweqasdas.svg"
                            className="rounded-circle shadow-1-strong me-3"
                            alt="avatar"
                            width="65"
                            height="65"
                          />
                          <div className="flex-grow-1 flex-shrink-1">
                            <div className="mb-4">
                              <div className=" d-flex justify-content-between align-items-center">
                                <p className="mb-1">
                                  Джон Дориан
                                  <span className="small"> 5 минут назад </span>
                                </p>
                                <button className=" btn btn-sm text-primary d-flex align-items-center">
                                  <i className="bi bi-x-lg"></i>
                                </button>
                              </div>
                              <p className="mb-0 small">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis, soluta facilis fugit
                                hic quasi sapiente accusamus quia voluptatem
                                dolorum laboriosam id iste voluptas modi animi
                                eius voluptatum adipisci amet officiis.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return <Loader />
}

export default UserPage

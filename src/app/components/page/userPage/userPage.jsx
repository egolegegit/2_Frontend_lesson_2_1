import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import _ from 'lodash'
import api from '../../../api'
import Loader from '../../../components/common/loader'
import NewComment from '../../common/comment/newComment'
import CommentList from '../../common/commentList'
import InfoCard from './InfoCards'
import MeetingsCard from './meetingsCard'
import QualitiesCard from './qualitiesCard'

const UserPage = () => {
  const params = useParams()
  const history = useHistory()
  const { userId } = params
  const [user, setUser] = useState()
  const [comments, setComments] = useState()
  const [users, setUsers] = useState()

  useEffect(() => {
    // api.users.fetchAll().then((data) => setUsers(() => data))
    // use async/await variant
    const fetchUsers = async () => {
      try {
        const data = await api.users.fetchAll()
        setUsers(() => data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const data = await api.comments.fetchCommentsForUser(userId)
        setComments(() => data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchComment()
  }, [userId])

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

  const sortComments = _.orderBy(comments, ['created_at'], ['desc'])

  if (user && users) {
    return (
      <div className="flex flex-col w-full p-4 user-conteiner">
        <div className="container">
          <div className="mb-10 col-md-2">
            <button
              className="w-full mt-2 btn btn-primary"
              onClick={() => history.push('/users')}
              title="to the list users"
            >
              Users
            </button>
          </div>
          <div className="row gutters-sm">
            <div className="mb-3 col-md-4">
              <InfoCard user={user} />
              <QualitiesCard user={user} />
              <MeetingsCard user={user} />
            </div>
            <div className="col-md-8">
              <NewComment
                users={users}
                userId={user._id}
                setComments={setComments}
              />
              <CommentList
                users={users}
                user={user}
                comments={sortComments}
                setComments={setComments}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return <Loader />
}

export default UserPage

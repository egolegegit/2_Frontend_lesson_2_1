import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { swap } from '../utils/utils'
import User from './user'
import Pagination from './pagination'
import paginate from '../utils/paginate'
import GroupList from './groupList'
import api from '../api'

const Users = ({ users, ...rest }) => {
  const pageSize = 4
  const userCount = users.length
  const pageCount = Math.ceil(userCount / pageSize)
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  const handleProfessionsSelect = (item) => {
    setSelectedProf(item)
  }

  const theadTrasnlate = {
    name: 'Имя',
    qualities: 'Качества',
    profession: 'Профессия',
    completedMeetings: 'Кол-во встреч',
    rate: 'Оценка',
    favorites: 'Избранное',
  }

  const getThead = () => [
    ...swap(Object.keys(users[0]), 2, 3).slice(1),
    'favorites',
  ]

  const handlePageChange = (pageIdx) => {
    setCurrentPage(pageIdx)
  }

  const newCurrentPage = currentPage < pageCount ? currentPage : pageCount

  const usersCrop = paginate(users, newCurrentPage, pageSize)

  const renderTables = () => {
    return (
      <>
        {professions && (
          <GroupList
            items={professions}
            onitemSelect={handleProfessionsSelect}
            selectedItem={selectedProf}
            // valueProperty='_id'
            // contentProperty='name'
          />
        )}

        {userCount > 0 && (
          <table className="table table-hover">
            <thead>
              <tr>
                {getThead().map((el, idx) => {
                  return (
                    <th scope={'col'} key={idx}>
                      {theadTrasnlate[el]}
                    </th>
                  )
                })}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {usersCrop.map((el, idx) => {
                return <User key={idx} user={el} {...rest} />
              })}
            </tbody>
          </table>
        )}

        <Pagination
          userCount={userCount}
          pageSize={pageSize}
          currentPage={newCurrentPage}
          onPageChange={handlePageChange}
        />
      </>
    )
  }

  return <>{renderTables()}</>
}

Users.propTypes = { users: PropTypes.array.isRequired }

export default Users

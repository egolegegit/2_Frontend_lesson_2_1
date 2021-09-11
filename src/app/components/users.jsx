/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { swap } from '../utils/utils'
import User from './user'
import Pagination from './pagination'
import GroupList from './groupList'
import SearchStatus from './searchStatus'
import paginate from '../utils/paginate'
import api from '../api'

const Users = ({ users, ...rest }) => {
  const pageSize = 2
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handleProfessionsSelect = (item) => {
    setSelectedProf(item)
  }

  const theadTrasnlate = {
    name: 'Имя',
    qualities: 'Качества',
    profession: 'Профессия',
    completedMeetings: 'Кол-во встреч',
    rate: 'Оценка',
    bookmark: 'Избранное',
  }

  const getThead = () => [
    ...new Set([...swap(Object.keys(users[0]), 2, 3).slice(1), 'bookmark']),
  ]

  const handlePageChange = (pageIdx) => {
    setCurrentPage(pageIdx)
  }

  const filterUsers = selectedProf
    ? users.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProf)
      )
    : users

  const userCount = filterUsers.length
  const pageCount = Math.ceil(userCount / pageSize)
  const newCurrentPage = currentPage < pageCount ? currentPage : pageCount

  const usersCrop = paginate(filterUsers, newCurrentPage, pageSize)

  const clearFilter = () => {
    setSelectedProf()
  }

  const renderTables = () => {
    return (
      <div className="p-4 d-flex flex-column">
        <SearchStatus count={userCount} />
        <div className="flex-row d-flex">
          <div className="d-flex flex-column me-4">
            <span className="border-0 list-group-item fw-bold">Отбор</span>
            {professions && (
              <>
                <GroupList
                  items={professions}
                  onitemSelect={handleProfessionsSelect}
                  selectedItem={selectedProf}
                />
                <button
                  className="mt-2 btn btn-secondary"
                  onClick={clearFilter}
                >
                  Очистить
                </button>
              </>
            )}
          </div>
          <div className="d-flex flex-column flex-fill">
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
                  {usersCrop.map((user, idx) => {
                    return (
                      <User
                        key={idx}
                        user={user}
                        bookmark={user.bookmark}
                        {...rest}
                      />
                    )
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
          </div>
        </div>
      </div>
    )
  }

  return <>{renderTables()}</>
}

Users.propTypes = { users: PropTypes.array.isRequired }

export default Users

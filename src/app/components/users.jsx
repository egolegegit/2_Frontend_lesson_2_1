import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Pagination from './pagination'
import GroupList from './groupList'
import SearchStatus from './searchStatus'
import paginate from '../utils/paginate'
import api from '../api'
import UserTable from './usersTable'
import _ from 'lodash'

const Users = ({ users, ...rest }) => {
  const pageSize = 8
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handleProfessionsSelect = (item) => {
    setSelectedProf(item)
  }

  const handlePageChange = (pageIdx) => {
    setCurrentPage(pageIdx)
  }

  const handleSort = (item) => {
    setSortBy(item)
  }

  const filterUsers = selectedProf
    ? users.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProf)
        // user.profession._id === selectedProf._id
      )
    : users

  const userCount = filterUsers.length
  const pageCount = Math.ceil(userCount / pageSize)
  const newCurrentPage = currentPage < pageCount ? currentPage : pageCount

  const sortedUsers = _.orderBy(filterUsers, [sortBy.path], [sortBy.order])

  const usersCrop = paginate(sortedUsers, newCurrentPage, pageSize)

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
              <UserTable
                users={usersCrop}
                onSort={handleSort}
                selectedSort={sortBy}
                {...rest}
              />
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

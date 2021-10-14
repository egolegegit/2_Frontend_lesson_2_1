import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import api from '../../../api'
import paginate from '../../../utils/paginate'
import Pagination from '../../common/pagination'
import GroupList from '../../common/groupList'
import SearchStatus from '../../ui/searchStatus'
import UserTable from '../../ui/usersTable'
import Loader from '../../common/loader'
import TextField from '../../common/form/textField'
import searchBySubString from '../../../utils/searchBySubString'

const UsersListPage = () => {
  const pageSize = 8
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })
  const [searchData, setSearchData] = useState('')

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
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handleDelete = (userId) => {
    setUsers(users.filter((item, id) => item._id !== userId))
  }

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
  }

  const handleProfessionsSelect = (item) => {
    setSelectedProf(item)
    setSearchData('')
  }

  const handlePageChange = (pageIdx) => {
    setCurrentPage(pageIdx)
  }

  const handleSort = (item) => {
    setSortBy(item)
  }

  const handleChange = ({ target }) => {
    setSelectedProf()
    setSearchData((prevState) => target.value)
  }

  const clearFilter = () => {
    setSelectedProf()
    setSearchData('')
  }

  if (users) {
    let filterUsers = selectedProf
      ? users.filter(
          (user) =>
            JSON.stringify(user.profession) === JSON.stringify(selectedProf)
          // user.profession._id === selectedProf._id
        )
      : users

    filterUsers = searchBySubString(filterUsers, searchData)

    const userCount = filterUsers.length
    const pageCount = Math.ceil(userCount / pageSize)
    const newCurrentPage = currentPage < pageCount ? currentPage : pageCount

    const sortedUsers = _.orderBy(filterUsers, [sortBy.path], [sortBy.order])

    const usersCrop = paginate(sortedUsers, newCurrentPage, pageSize)

    const renderTables = () => {
      return (
        <div className="my-4 d-flex flex-column users-page-container">
          <SearchStatus count={userCount} />
          <div className="flex-row d-flex">
            <div className="mt-2 d-flex flex-column me-4">
              <span className="px-2 py-2 border-0 fw-bold dark:text-green-200">
                Отбор
              </span>
              {professions && (
                <>
                  <GroupList
                    items={professions}
                    onitemSelect={handleProfessionsSelect}
                    selectedItem={selectedProf}
                  />
                  <button
                    className="mt-2 btn btn-secondary dark:bg-gray-600"
                    onClick={clearFilter}
                  >
                    Очистить
                  </button>
                </>
              )}
            </div>
            <div className="d-flex flex-column flex-fill">
              <TextField
                label=""
                name="search"
                value={searchData}
                placeholder={'search ...'}
                onChange={handleChange}
              />
              {userCount > 0 && (
                <>
                  <UserTable
                    users={usersCrop}
                    onSort={handleSort}
                    selectedSort={sortBy}
                    onDelete={handleDelete}
                    onToggleBookMark={handleToggleBookMark}
                  />
                  <Pagination
                    userCount={userCount}
                    pageSize={pageSize}
                    currentPage={newCurrentPage}
                    onPageChange={handlePageChange}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )
    }

    return renderTables()
  }
  return <Loader />
}

UsersListPage.propTypes = { users: PropTypes.array }

export default UsersListPage

import React from 'react'
import PropTypes from 'prop-types'
// import User from './user'
// import TableHeader from './tableHeader'
// import  from './tableBody'
import BookMark from './bookmark'
import QualitiesList from './qualitiesList'
import Table from './table'

const UserTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookMark,
  onDelete,
  ...rest
}) => {
  // TODO основа!!! такой обьект должна возвращать функция getThead
  const columns = {
    name: { path: 'name', name: 'Имя' },
    qualities: {
      name: 'Качества',
      component: (users) => <QualitiesList qualities={users.qualities} />,
    },
    profession: { path: 'profession.name', name: 'Профессия' },
    completedMeetings: { path: 'completedMeetings', name: 'Кол-во встреч' },
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (
        <BookMark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button
          title="Удалить"
          onClick={() => onDelete(user._id)}
          className="btn btn-danger"
        >
          x
        </button>
      ),
    },
  }

  return (
    // 1 способ
    // нет доступа к TableHeader, TableBody
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  )
}

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
}

export default UserTable

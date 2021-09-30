import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookMark from './bookmark'
import QualitiesList from './qualitiesList'
import Table from './table'

const UserTable = ({ users, onSort, selectedSort, onDelete, onToggleBookMark }) => {
  // TODO основа!!! к такой обьект должна возвращать функция getThead
  const columns = {
    name: {
      path: 'name',
      name: 'Имя',
      component: (user) => (
        <Link to={`/users/${user._id}`} className="nav-item nav-link">
          {user.name}
        </Link>
      ),
      classname: 'col-2'
    },
    qualities: {
      name: 'Качества',
      component: (users) => <QualitiesList qualities={users.qualities} />,
      classname: 'col-2'
    },
    profession: {
      path: 'profession.name',
      name: 'Профессия',
      classname: 'col-2'
    },
    completedMeetings: {
      path: 'completedMeetings',
      name: 'Кол-во встреч',
      classname: 'col-2'
    },
    rate: { path: 'rate', name: 'Оценка', classname: 'col-2' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (
        <BookMark status={user.bookmark} onClick={() => onToggleBookMark(user._id)} />
      ),
      classname: 'col-2'
    },
    delete: {
      component: (user) => (
        <button title="Удалить" onClick={() => onDelete(user._id)} className="btn btn-danger">
          x
        </button>
      ),
      classname: 'col-1'
    }
  }

  return <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={users} />
}

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired
}

export default UserTable

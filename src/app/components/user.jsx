import React from 'react'
import PropTypes from 'prop-types'
import Qualitie from './qualitie'
import Bookmark from './bookmark'

const User = ({ user, onDelete, bookmark, onToggleBookMark, ...rest }) => {
  return (
    <tr key={user._id}>
      <td className="col-2">{user.name}</td>
      <td className="col-3">
        {user.qualities.map((el, idx) => (
          <Qualitie key={idx} qualitie={el} />
        ))}
      </td>
      <td className="col-2">{user.profession.name}</td>
      <td className="col-2">{user.completedMeetings}</td>
      <td className="col-1">{user.rate}</td>
      <td className="col-1">
        {
          <Bookmark
            status={bookmark}
            onClick={() => onToggleBookMark(user._id)}
          />
        }
      </td>
      <td className="col-1">
        <button
          title="Удалить"
          onClick={() => onDelete(user._id)}
          className="btn btn-danger"
        >
          x
        </button>
      </td>
    </tr>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  bookmark: PropTypes.bool,
  onToggleBookMark: PropTypes.func.isRequired,
}

export default User

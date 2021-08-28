import React from 'react'
import Qualitie from './qualitie'
import Bookmark from './bookmark'

const User = ({ user, onDelete }) => {
  return (
    <tr key={user._id}>
      <td className='col-2'>{user.name}</td>
      <td className='col-3'>
        {user.qualities.map((el, idx) => (
          <Qualitie key={idx} qualitie={el} />
        ))}
      </td>
      <td className='col-2'>{user.profession.name}</td>
      <td className='col-2'>{user.completedMeetings}</td>
      <td className='col-1'>{user.rate}</td>
      <td className='col-1'>{<Bookmark id={user._id} />}</td>
      <td className='col-1'>
        <button onClick={() => onDelete(user._id)} className='btn btn-danger'>
          delete
        </button>
      </td>
    </tr>
  )
}

export default User

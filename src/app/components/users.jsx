import React from 'react'
import { swap } from '../../utils'
import User from './user'

const Users = ({ users, ...rest }) => {
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

  const renderTables = () => {
    if (users.length === 0) {
      return ''
    }
    return (
      <table className='table table-hover'>
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
          {users.map((el, idx) => {
            return (
              <User
                key={idx}
                user={el}
                {...rest}
              />
            )
          })}
        </tbody>
      </table>
    )
  }

  return <>{renderTables()}</>
}

export default Users

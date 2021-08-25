import React, { useState } from 'react'
import api from '../api'
import { swap, renderPhrase } from '../utils'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const titles = ['человек', 'человека', 'человек']

  const theadTrasnlate = {
    name: 'Имя',
    qualities: 'Качества',
    profession: 'Профессия',
    completedMeetings: 'Кол-во встреч',
    rate: 'Оценка',
  }

  const handleDelete = (userId) => {
    setUsers(users.filter((item, id) => item._id !== userId))
  }

  const renderTitle = () => {
    let classesTitle = 'badge bg-'
    classesTitle += users.length !== 0 ? 'primary' : 'danger'
    const texTitle =
      users.length !== 0
        ? `${users.length} ${renderPhrase(
            users.length,
            titles
          )} тусанется сегодня с тобой `
        : 'Никто с тобой не тусанет'
    return (
      <h4>
        <span className={`badge bg-${classesTitle}`}>{texTitle}</span>
      </h4>
    )
  }

  const getThead = () => swap(Object.keys(users[0]), 2, 3).slice(1)

  const getRow = (item, id) => {
    return (
      <tr key={item._id}>
        <td className='col-2'>{item.name}</td>
        <td className='col-3'>
          {item.qualities.map((el, idx) => (
            <span key={el._id} className={`badge bg-${el.color} m-1`}>
              {el.name}
            </span>
          ))}
        </td>
        <td className='col-2'>{item.profession.name}</td>
        <td className='col-2'>{item.completedMeetings}</td>
        <td className='col-1'>{item.rate}</td>
        <td className='col-1'>
          <button
            onClick={() => handleDelete(item._id)}
            className='btn btn-danger'
          >
            delete
          </button>
        </td>
      </tr>
    )
  }

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
            return getRow(el, idx)
          })}
        </tbody>
      </table>
    )
  }

  return (
    <>
      {renderTitle()}
      {renderTables()}
    </>
  )
}

export default Users

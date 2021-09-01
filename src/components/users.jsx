import React, { useState } from 'react'
import api from '../api'
import { useLogger, useInput } from '../utils/utils'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const titles = ['человек', 'человека', 'человек']

  const colTrasnlate = {
    name: 'Имя',
    qualities: 'Качества',
    profession: 'Профессия',
    completedMeetings: 'Кол-во встреч',
    rate: 'Оценка',
  }

  const swap = (el, i, j) => {
    return el.map((el, idx, array) => {
      if (idx === i) return array[j]
      if (idx === j) return array[i]
      return el
    })
  }

  const dataforRendering = (i, j) => {
    const outputData = users.reduce((acc, obj, idx) => {
      if (idx === 0) acc.push(swap(Object.keys(obj), i, j))
      acc.push(swap(Object.values(obj), i, j))
      return acc
    }, [])

    return outputData
  }

  const dataRendering = dataforRendering(2, 3)

  const handleDelete = (userId) => {
    setUsers(users.filter((item) => item._id !== userId))
  }

  const renderPhrase = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
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
  const getRow = (item, id) => {
    return (
      <tr key={id}>
        <td className="col-2">{item[1]}</td>
        <td className="col-3">
          {item[2].map((el, idx) => (
            <span key={idx} className={`badge bg-${el.color} m-1`}>
              {el.name}
            </span>
          ))}
        </td>
        <td className="col-2">{item[3].name}</td>
        <td className="col-2">{item[4]}</td>
        <td className="col-1">{item[5]}</td>
        <td className="col-1">
          <button
            onClick={() => handleDelete(item[0])}
            className="btn btn-danger"
          >
            delete
          </button>
        </td>
      </tr>
    )
  }

  const renderTables = () => {
    if (users.length === 0) {
      return null
    }
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            {dataRendering[0].slice(1).map((el, idx) => {
              return (
                <th scope={'col'} key={idx}>
                  {colTrasnlate[el]}
                </th>
              )
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataRendering.slice(1).map((el, idx) => {
            return getRow(el, idx)
          })}
        </tbody>
      </table>
    )
  }
  const input = useInput('')

  useLogger(input.value)

  return (
    <>
      {renderTitle()}
      {renderTables()}
      <div className="d-flex align-items-center justify-content-center">
        <input type="text" {...input.bind} />
        <button className="m-2 btn btn-warning" onClick={() => input.clear()}>
          Очистить
        </button>
      </div>
      <span className="d-flex justify-content-center fw-bold fs-3 text-wrap">
        {input.value}
      </span>
    </>
  )
}

export default Users

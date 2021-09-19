import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className="nav ps-2">
      <li className="nav-item nav-link">
        <Link to="/">Main</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/login">Login</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/users">Users</Link>
      </li>
    </ul>
  )
}

export default NavBar

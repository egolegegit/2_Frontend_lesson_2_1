import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav ps-2">
      <Link to="/" className="nav-item nav-link">
        Main
      </Link>
      <Link to="/login" className="nav-item nav-link">
        Login
      </Link>
      <Link to="/users" className="nav-item nav-link">
        Users
      </Link>
    </div>
  )
}

export default NavBar

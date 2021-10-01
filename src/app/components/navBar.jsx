import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav ps-2 pt-1">
      <NavLink
        exact
        to="/"
        className="nav-item nav-link"
        activeClassName="bg-secondary bg-opacity-25"
      >
        Main
      </NavLink>
      <NavLink
        to="/login"
        className="nav-item nav-link"
        activeClassName="bg-secondary bg-opacity-25"
      >
        Login
      </NavLink>
      <NavLink
        to="/users"
        className="nav-item nav-link"
        activeClassName="bg-secondary bg-opacity-25"
      >
        Users
      </NavLink>
    </div>
  )
}

export default NavBar

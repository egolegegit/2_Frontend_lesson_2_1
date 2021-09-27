import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './themetoggle/ThemeToggle'

const NavBar = () => {
  return (
    <div className="nav pe-4 pt-1 justify-end align-items-center">
      <ThemeToggle />
      <NavLink
        exact
        to="/"
        className="nav-item nav-link rounded-2"
        activeClassName="bg-secondary bg-opacity-25"
      >
        Main
      </NavLink>
      <NavLink
        to="/login"
        className="nav-item nav-link rounded-2"
        activeClassName="bg-secondary bg-opacity-25"
      >
        Login
      </NavLink>
      <NavLink
        to="/users"
        className="nav-item nav-link rounded-2"
        activeClassName="bg-secondary bg-opacity-25"
      >
        Users
      </NavLink>
    </div>
  )
}

export default NavBar

import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './themetoggle/ThemeToggle'

const NavBar = () => {
  return (
    <div className="justify-end pt-1 nav pe-4 align-items-center">
      <ThemeToggle />
      <NavLink
        exact
        to="/"
        className="z-10 nav-item nav-link rounded-2 dark:text-white hover-link"
        activeClassName="bg-secondary bg-opacity-25"
      >
        Main
      </NavLink>
      <NavLink
        to="/login"
        className="z-10 nav-item nav-link rounded-2 dark:text-white hover-link"
        activeClassName="bg-secondary bg-opacity-25"
      >
        Login
      </NavLink>
      <NavLink
        to="/users"
        className="z-10 nav-item nav-link rounded-2 dark:text-white hover-link"
        activeClassName="bg-secondary bg-opacity-25"
      >
        Users
      </NavLink>
    </div>
  )
}

export default NavBar

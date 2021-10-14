import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from '../../components/common/themetoggle/ThemeToggle'

const NavBar = () => {
  return (
    <div className="layout-header">
      <ThemeToggle />
      <NavLink
        exact
        to="/"
        className="z-0 px-3 py-2 no-underline dark:text-white hover-link"
        activeClassName="dark:focus:text-green-200 dark:bg-gray-600 bg-gray-300"
      >
        Main
      </NavLink>
      <NavLink
        to="/login"
        className="z-0 px-3 py-2 no-underline dark:text-white hover-link"
        activeClassName="dark:focus:text-green-200 dark:bg-gray-600 bg-gray-300"
      >
        Login
      </NavLink>
      <NavLink
        to="/users"
        className="z-0 px-3 py-2 no-underline dark:text-white hover-link"
        activeClassName="dark:focus:text-green-200 dark:bg-gray-600 bg-gray-300"
      >
        Users
      </NavLink>
    </div>
  )
}

export default NavBar

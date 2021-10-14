import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import SunIcon from '../../../assets/svg/SunIcon'
import MoonIcon from '../../../assets/svg/MoonIcon'
import './themetoggle.scss'

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext)
  const { theme, setTheme } = themeContext

  const toggleState = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <label className="toggle-wrapper me-3" htmlFor="toggle">
      <div className={`toggle ${theme === 'dark' ? 'enabled' : 'disabled'}`}>
        <span className="hidden">
          {theme === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          defaultChecked={theme === 'dark'}
          onClick={toggleState}
        />
      </div>
    </label>
  )
}

export default ThemeToggle

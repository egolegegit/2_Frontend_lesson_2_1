import React, { useState, useEffect } from 'react'
import SunIcon from './SunIcon'
import MoonIcon from './MoonIcon'
import './themetoggle.scss'

const ThemeToggle = () => {
  const [isEnabled, setIsEnabled] = useState(true)
  const toggleState = () => {
    setIsEnabled((prevState) => !prevState)
  }

  const updateTheme = (isDarkEnabled) => {
    // Get all available styles
    const styles = getComputedStyle(document.body)

    // Get the --black and --white variable values
    const black = styles.getPropertyValue('--black')
    const white = styles.getPropertyValue('--white')

    const docEl = document.documentElement
    const htmlEl = document.querySelector('html')

    if (isDarkEnabled) {
      docEl.style.setProperty('--background', black)
      docEl.style.setProperty('--foreground', white)
      htmlEl.classList.remove('dark')
    } else {
      docEl.style.setProperty('--background', white)
      docEl.style.setProperty('--foreground', black)
      htmlEl.classList.add('dark')
    }
  }

  useEffect(() => {
    updateTheme(isEnabled)
  }, [isEnabled])

  return (
    <label className="toggle-wrapper me-3" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? 'enabled' : 'disabled'}`}>
        <span className="hidden">
          {isEnabled ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          defaultChecked={isEnabled}
          onClick={toggleState}
        />
      </div>
    </label>
  )
}

export default ThemeToggle

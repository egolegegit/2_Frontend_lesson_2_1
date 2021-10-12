import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../contexts/theme-context'

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && localStorage) {
    const storedPrefs = localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  return 'light'
}

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = (rawTheme) => {
    const isDark = rawTheme === 'dark'
    const root = window.document.documentElement

    const styles = getComputedStyle(document.body)
    const black = styles.getPropertyValue('--black')
    const white = styles.getPropertyValue('--white')
    const docEl = document.documentElement

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)

    localStorage.setItem('color-theme', rawTheme)

    if (isDark) {
      docEl.style.setProperty('--background', black)
      docEl.style.setProperty('--foreground', white)
    } else {
      docEl.style.setProperty('--background', white)
      docEl.style.setProperty('--foreground', black)
    }
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  React.useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  initialTheme: PropTypes.string,
  children: PropTypes.object,
}

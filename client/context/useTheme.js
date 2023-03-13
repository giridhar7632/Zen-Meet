import { createContext, useContext, useEffect, useState } from 'react'

// making custom hook to use context in each component
export const useTheme = () => useContext(ThemeContext)

// creating context
export const ThemeContext = createContext({})

// defining the Context provider
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('')
  const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches
  const STORAGE_KEY = 'theme'
  const DARK_PREFERENCE = '(prefers-color-scheme: dark)'

  useEffect(() => {
    applyTheme()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
  }
  const applyTheme = () => {
    const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT
    const theme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme
    setCurrentTheme(theme)

    console.log(
      'preferredTheme',
      preferredTheme,
      'theme',
      theme,
      'stored',
      localStorage.getItem(STORAGE_KEY)
    )

    if (theme === THEMES.DARK) {
      document.documentElement.classList.add(THEMES.DARK)
    } else {
      document.documentElement.classList.remove(THEMES.DARK)
    }
  }

  const toggleTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (!stored) {
      // clear storage
      localStorage.setItem(STORAGE_KEY, !prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT)
    } else {
      console.log(stored)
      localStorage.setItem(STORAGE_KEY, stored == THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
    }

    applyTheme()
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, prefersDarkThemes, applyTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

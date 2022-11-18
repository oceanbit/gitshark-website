import * as React from "react"

import { theme, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from "../theme"

export const ThemeContext = React.createContext({
  colorMode: undefined,
  setColorMode: () => {},
})

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined)

  React.useEffect(() => {
    const root = window.document.documentElement

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    )

    rawSetColorMode(initialColorValue)
  }, [])

  const contextValue = React.useMemo(() => {
    const setColorMode = newValue => {
      const root = window.document.documentElement

      localStorage.setItem(COLOR_MODE_KEY, newValue)

      Object.entries(theme.colors).forEach(([name, colorByTheme]) => {
        const cssVarName = `--${name}`

        root.style.setProperty(cssVarName, colorByTheme[newValue])
      })

      rawSetColorMode(newValue)
    }

    return {
      colorMode,
      setColorMode,
    }
  }, [colorMode, rawSetColorMode])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

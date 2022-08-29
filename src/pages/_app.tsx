import React, { useReducer } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global-styles'
import { theme } from '../theme'
import { CustomThemeContext, CustomThemeReducer, IThemeProvider } from '../context/ThemeContext'

function MyApp ({ Component, pageProps }: AppProps) {
  const [currentTheme, setNewTheme] = useReducer(CustomThemeReducer, []);
  const value: IThemeProvider = { currentTheme, setNewTheme };

  if (Array.isArray(currentTheme) && !currentTheme.length) {
    setNewTheme(theme.dark);
  }

  return (
    <CustomThemeContext.Provider value={value}>
      <ThemeProvider theme={currentTheme.updatedTheme} >
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </CustomThemeContext.Provider>
  )
}
export default MyApp

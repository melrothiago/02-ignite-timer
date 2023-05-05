import { ThemeProvider } from 'styled-components'
import { Router } from './components/styles/Router.tsx'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './components/styles/themes/default.ts'
import { GlobalStyle } from './components/styles/global.ts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

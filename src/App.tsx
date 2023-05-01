import { Button } from './components/Button.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './components/styles/themes/default.ts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant='primary' />
      <Button variant='secondary' />
      <Button variant='success' />
      <Button variant='danger' />
      <Button />
    </ThemeProvider>
  )
}

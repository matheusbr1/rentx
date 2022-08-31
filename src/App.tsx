import { ThemeProvider } from 'styled-components'
import { Start } from './pages/Start'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Start />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

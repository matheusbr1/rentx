import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import { AppProvider } from './hooks/contexts'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <AppProvider>
        <Routes />

        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App

import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import { AppProvider } from './hooks/contexts'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import 'react-calendar/dist/Calendar.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

// Create a client
export const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Toaster position='bottom-center' toastOptions={{
        style: {
          background: defaultTheme.colors.gray[800],
          color: 'white'
        }
      }} />

      <ThemeProvider theme={defaultTheme} >
        <AppProvider>
          <Routes />  

          <ReactQueryDevtools />

          <GlobalStyle />
        </AppProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

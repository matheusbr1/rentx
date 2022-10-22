import React from 'react'

import { AuthProvider } from './useAuth'
import { RentProvider } from './useRent'

interface ProviderProps {
  children: React.ReactNode
}

const AppProvider: React.FC<ProviderProps> = ({ children }) => (
  <AuthProvider>
    <RentProvider>
      {children}
    </RentProvider>
  </AuthProvider>
)

export { AppProvider }

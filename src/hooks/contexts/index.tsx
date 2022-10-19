import React from 'react'

import { AuthProvider } from './useAuth'

interface ProviderProps {
  children: React.ReactNode
}

const AppProvider: React.FC<ProviderProps> = ({ children }) => (
    <AuthProvider>
      {children}
    </AuthProvider>
)

export { AppProvider }

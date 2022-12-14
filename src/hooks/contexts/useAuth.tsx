import React, { createContext, useContext } from 'react'
import { api } from '../../services/api'
import { destroyCookie, setCookie } from 'nookies'
import usePersistedState from '../usePersistedState'
import { HeadersDefaults } from 'axios'
import toast from 'react-hot-toast'

export type User = {
  email: string
  name: string
  driver_license: string
  avatar_URL: string
}

export type SignInCreadentials = {
  email: string
  password: string
}

export interface SignUpFields {
  name: string
	email: string
	driver_license: string
	password: string
}

interface IAuthContext {
  signIn(credentials: SignInCreadentials): Promise<void>
  signOut(): void
  signUp(fields: SignUpFields): Promise<void>
  isAuthenticated: boolean
  user: User | null
}

interface ProviderProps {
  children: React.ReactNode
}

interface APIHeaders extends HeadersDefaults {
  Authorization: string
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = usePersistedState('user', null)
  const isAuthenticated = !!user

  async function signIn({ email, password }: SignInCreadentials) {
    try {
      const { data } = await api.post('sessions', {
        email,
        password
      })

      setUser(data.user)
      
      // Setting JWT into cookies
      const expiresIn = 60 * 60 * 24 * 30 // 30 days
      setCookie(undefined, 'rentx.token', data.token, { maxAge: expiresIn, path: '/' })
      setCookie(undefined, 'rentx.refresh_token', data.refresh_token, { maxAge: expiresIn, path: '/' })

      const headers = api.defaults.headers as APIHeaders

      // Updating Token into API
      headers['Authorization'] = `Bearer ${data.token}`

      // Snack Sucesso
      toast.success("Login realizado com sucesso!")
    } catch (error) { 
      // Snack Erro
      toast.error('Ocorreu um erro ao realizar login!')

      throw new Error()
    }
  }

  async function signUp (fields: SignUpFields) {
    try {
      const { name, email, password, driver_license } = fields

      await api.post('users', {
        name: name,
        username: name,
        email: email,
        password: password,
        driver_license: driver_license
      })
    } catch (error) {
      // Snack Erro
      toast.error('Ocorreu um erro ao criar conta!')

      throw new Error()
    }
  }

  function signOut () {
    destroyCookie(undefined, 'rentx.token')
    destroyCookie(undefined, 'rentx.refresh_token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      signUp,
      isAuthenticated,
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth (): IAuthContext {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  
  return context
}

export { useAuth, AuthProvider }
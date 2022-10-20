import React, { createContext, useContext } from 'react'
import { api } from '../../services/api'
import { destroyCookie, setCookie } from 'nookies'
import usePersistedState from '../usePersistedState'
import { HeadersDefaults } from 'axios'

type User = {
  email: string
  name: string
  driver_license: string
  avatar_URL: string
}

type ProfileRequestResponse = User

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
  getUserProfile(): Promise<void>
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
      console.log('Login realizado com sucesso!')
    } catch (error) { 
      console.log(error)

      // Snack Erro
      console.log('Ocorreu um erro ao realizar login!')
    }
  }

  function signOut () {
    destroyCookie(undefined, 'rentx.token')
    destroyCookie(undefined, 'rentx.refresh_token')
    setUser(null)
  }

  async function getUserProfile () {
    try {
      const { data } = await api.get<ProfileRequestResponse>('users/profile')

      console.log(data)

      const userProfile: User = {
        name: data.name,
        email: data.email,
        avatar_URL: data.avatar_URL,
        driver_license: data.driver_license,
      }

      setUser(userProfile)
    } catch (error) {
      // Snack Erro
      console.log('Ocorreu um erro ao buscar o perfil!')
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

      // Snack Sucesso
      console.log('Conta criada com sucesso')    
    } catch (error) {
      // Snack Erro
      console.log('Ocorreu um erro ao criar conta!')
    }
  }

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      signUp,
      isAuthenticated,
      user,
      getUserProfile
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
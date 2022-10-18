import create from 'zustand'
import produce, { original } from 'immer'
import { devtools, persist } from 'zustand/middleware'

interface IUser {
  name: string
  email: string
}

interface AuthStore {
  user: IUser | null
  isAuthenticated: boolean
  signIn: (user: IUser) => void
  signOut: () => void
}

const initialState: Partial<AuthStore> = {
  user: null,
  isAuthenticated: false
}

export const useAuthStore = create<AuthStore>()(
  devtools(persist((set) => {
      const setState = (fn: (store: AuthStore) => void) => set(produce(fn))

      return {
        ...initialState,
        signIn: user => setState((state) => {
          state.user = user
          state.isAuthenticated = true
        }),
        signOut: () => setState((state) => {
          state.user = null
          state.isAuthenticated = false
        })
      } as AuthStore
    },
    {
      name: 'auth-storage', 
      getStorage: () => sessionStorage,
      
    }
  ))
)
import { AppBar } from '.'
import { renderTheme } from '../../styles/test/renderTheme'
import { expect, it, vi } from 'vitest'
import { act } from '@testing-library/react'

const mockedPush = vi.fn()

vi.mock('react-router-dom', () => ({
  Link: () => {},
  useHistory: () => ({
    push: mockedPush
  })
}))

let setup = {
  isAuthenticated: false,
  signOut: vi.fn()
}

vi.mock('../../hooks/contexts/useAuth', () => ({
  useAuth: (() => ({
    isAuthenticated: setup.isAuthenticated,
    signOut: setup.signOut
  }))
}))

describe('AppBar Component', () => {
  it('should be able to signOut', () => {
    setup.isAuthenticated = true
    
    const { getByAltText } = renderTheme(<AppBar title='Testing' />)
    const logoutIcon = getByAltText('Ícone de desligar')

    act(() => {
      logoutIcon.click()
    })

    expect(setup.signOut).toBeCalledTimes(1)
  })

  it('should be able to display a logout button when user is logged', () => {
    setup.isAuthenticated = true
    
    const { getByAltText } = renderTheme(<AppBar title='Testing' />)
    const logoutIcon = getByAltText('Ícone de desligar')
    expect(logoutIcon).toBeTruthy()
  })

  it('should be able to display a profile icon when user is not logged', () => {
    setup.isAuthenticated = false
    
    const { getByAltText } = renderTheme(<AppBar title='Testing' />)
    const logoutIcon = getByAltText('Foto do usuário')
    expect(logoutIcon).toBeTruthy()
  })
})
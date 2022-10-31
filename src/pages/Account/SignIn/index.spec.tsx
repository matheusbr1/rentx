import { SignIn } from './'
import { expect, it, vi } from 'vitest'
import { renderTheme } from '../../../styles/test/renderTheme'
import { act } from 'react-dom/test-utils'

const setup = {
  push: vi.fn()
}

vi.mock('react-router-dom', () => ({
  Link: () => {},
  useLocation: () => ({
    pathname: ''
  }),
  useHistory: () => ({
    push: setup.push
  })
}))

vi.mock('react-hook-form', () => ({
 useForm: () => ({
    register: () => {},
    handleSubmit: () => {},
    formState: {
      errors: {}
    } 
  })
}))

describe('SignIn Page', () => {
  it('should be able to navigate to signUp page', () => {
    const { getByText } = renderTheme(<SignIn />)

    const button = getByText('Criar conta gratuita')
    
    button.click()

    expect(setup.push).toHaveBeenCalledWith('/account/signup')
  })
  
  it.todo('should be able to navigate to forgot password page')
})
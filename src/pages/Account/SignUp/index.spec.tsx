import { SignUp } from './'
import { expect, it, vi } from 'vitest'
import { renderTheme } from '../../../styles/test/renderTheme'
import { act } from 'react-dom/test-utils'
import React from 'react'

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

describe('SignUp Page', () => {
  it('renders correctly', () => {
    const { getByText } = renderTheme(<SignUp />)

    expect(getByText('Crie sua conta')).toBeTruthy()
  })
})
import { TextField } from './'
import { expect, it } from 'vitest'
import { renderTheme } from '../../styles/test/renderTheme'

describe('TextField Component', () => {
  it('render correctly', () => {
    const { getByPlaceholderText } = renderTheme(<TextField placeholder='Testing' />)
    expect(getByPlaceholderText('Testing')).toBeTruthy()
  })

  it('should be able render a helper text', () => {
    const { getByText } = renderTheme(<TextField helperText='Testing' />)
    expect(getByText('Testing')).toBeTruthy()
  })
})
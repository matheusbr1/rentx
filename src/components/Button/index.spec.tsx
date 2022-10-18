import { render } from '@testing-library/react'
import { Button } from './'
import { expect, it } from 'vitest'

describe('Button Component', () => {
  it('render correctly', () => {
    const { getByText } = render(<Button>Testing</Button>)
    expect(getByText('Testing')).toBeTruthy()
  })
})
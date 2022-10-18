import { render } from '@testing-library/react'
import { Card } from './'
import { expect, it } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

describe('Button Component', () => {
  it('render correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={defaultTheme} >
        <Card 
          brand='Honda'
          model='Fit'
          price={90000}
        />
      </ThemeProvider>
    )
    
    expect(getByText('Honda')).toBeTruthy()
    expect(getByText('Fit')).toBeTruthy()
    expect(getByText('R$ 90000')).toBeTruthy()
  })
})
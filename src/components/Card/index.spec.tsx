import { Card } from './'
import { renderTheme } from '../../styles/test/renderTheme'
import { expect, it } from 'vitest'

describe('Button Component', () => {
  it('render correctly', () => {
    const { getByText } = renderTheme(
      <Card 
        brand='Honda'
        model='Fit'
        price={90000}
      />
    )
    
    expect(getByText('Honda')).toBeTruthy()
    expect(getByText('Fit')).toBeTruthy()
    expect(getByText('R$ 90000')).toBeTruthy()
  })
})
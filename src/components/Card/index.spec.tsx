import { Card } from './'
import { renderTheme } from '../../styles/test/renderTheme'
import { expect, it } from 'vitest'

describe('Button Component', () => {
  it('render correctly', () => {
    const { getByText } = renderTheme(
      <Card 
        brand='Honda'
        model='Fit'
        daily_rate='90000'        
        image_URL='URL'
      />
    )
    
    expect(getByText('Honda')).toBeTruthy()
    expect(getByText('Fit')).toBeTruthy()
    expect(getByText('R$ 90.000')).toBeTruthy()
  })
})
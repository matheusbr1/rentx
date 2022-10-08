import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { GlobalStyle } from '../../styles/global'
import { Card, CardProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [
    Story => (
      <ThemeProvider theme={defaultTheme}>
        <div style={{ maxWidth: 400 }} >
          {Story()}
        </div>
        <GlobalStyle />
      </ThemeProvider>
    )
  ]
} as Meta

export const Default: StoryObj<CardProps> = {
  args: { 
    brand: 'Audi',
    model: 'Audi A1',
    price: 61000,
  },
}
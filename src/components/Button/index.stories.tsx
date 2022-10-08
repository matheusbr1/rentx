import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { GlobalStyle } from '../../styles/global'
import { Button, ButtonProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    Story => (
      <ThemeProvider theme={defaultTheme}>
        {Story()}
        <GlobalStyle />
      </ThemeProvider>
    )
  ]
} as Meta

export const Default: StoryObj<ButtonProps> = {
  args: { variant: 'primary', children: 'Button Label' },
}
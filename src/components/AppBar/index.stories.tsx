import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { GlobalStyle } from '../../styles/global'
import { AppBar, AppBarProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/AppBar',
  component: AppBar,
  decorators: [
    Story => (
      <ThemeProvider theme={defaultTheme}>
        {Story()}
        <GlobalStyle />
      </ThemeProvider>
    )
  ]
} as Meta

export const Default: StoryObj<AppBarProps> = {
  args: { title: 'Perfil',  style: {
    position: 'initial'
  }}
}
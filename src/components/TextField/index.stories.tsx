import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { GlobalStyle } from '../../styles/global'
import { TextField, TextFieldProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/TextField',
  component: TextField,
  decorators: [
    Story => (
      <ThemeProvider theme={defaultTheme}>
        <div style={{ maxWidth: 600 }} >
          {Story()}
        </div>
        <GlobalStyle />
      </ThemeProvider>
    )
  ]
} as Meta 

export const Default: StoryObj<TextFieldProps> = {
  args: { 
    icon: 'email',
   }
}
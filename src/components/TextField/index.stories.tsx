import { TextField, TextFieldProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Common/TextField',
  component: TextField,
  decorators: [
    Story => (
      <div style={{ maxWidth: 600 }} >
        {Story()}
      </div>
    )
  ]
} as Meta 

export const Default: StoryObj<TextFieldProps> = {
  args: { 
    icon: 'email',
   }
}
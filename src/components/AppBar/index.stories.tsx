import { AppBar, AppBarProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/AppBar',
  component: AppBar,
  argTypes: {
    style: {
      control: {
        type: null
      }
    }
  }
} as Meta

export const Default: StoryObj<AppBarProps> = {
  args: { title: 'Perfil',  style: {
    position: 'initial'
  }}
}
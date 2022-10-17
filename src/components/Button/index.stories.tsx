import { Button, ButtonProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Common/Button',
  component: Button,
} as Meta

export const Primary: StoryObj<ButtonProps> = {
  args: { variant: 'primary', children: 'Button Label' },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: { variant: 'secondary', children: 'Button Label' },
}

export const Success: StoryObj<ButtonProps> = {
  args: { variant: 'success', children: 'Button Label' },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: { variant: 'primary', children: 'Button Label', disabled: true },
}

export const WithHoverEffect: StoryObj<ButtonProps> = {
  args: { variant: 'primary', children: 'Button Label', hover: 'with-effect' },
}
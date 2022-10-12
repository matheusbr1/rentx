import { Card, CardProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [
    Story => (
      <div style={{ maxWidth: 400 }} >
        {Story()}
      </div>
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
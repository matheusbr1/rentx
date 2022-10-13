import { SpecCard, SpecCardProps } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { car } from '..'

export default {
  title: 'Components/Car/SpecCard',
  component: SpecCard,
  args: {
    image: car.specifications[0].img,
    text: car.specifications[0].text
  },
  decorators: [
    Story => (
      <div style={{ maxWidth: 400, display: 'grid' }} >
        {Story()}
      </div>
    )
  ]
} as Meta<SpecCardProps>

export const Default: StoryObj<SpecCardProps> = {}
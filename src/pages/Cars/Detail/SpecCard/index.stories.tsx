import { SpecCard, SpecCardProps } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { car } from '../../../../mocks/car'

const spec = car.specifications[0]

export default {
  title: 'Components/Car/SpecCard',
  component: SpecCard,
  args: {
    specification: spec
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
import { Carousel, CarouselProps } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { car } from '../../../../mocks/car'

export default {
  title: 'Components/Car/Carousel',
  component: Carousel,
  args: {
    images: car.images
  },
  decorators: [
    Story => (
      <div style={{ maxWidth: 600 }} >
        {Story()}
      </div>
    )
  ]
} as Meta<CarouselProps>

export const Default: StoryObj<CarouselProps> = {}
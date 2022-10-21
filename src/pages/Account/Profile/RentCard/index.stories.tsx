import { RentCard, RentCardProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

const rent = {
  id: "666e65d6-5604-4ad9-a5ec-277246036a1e",
  start_date: "2022-05-21T00:29:00.949Z",
  end_date: "2022-05-23T00:29:36.981Z",
  expected_return_date: "2022-05-24T15:52:05.880Z",
  total: "200",
  car: {
    name: "Audi A3",
    brand: "Audi",
    daily_rate: "100",
  }
}

export default {
  title: 'Components/Profile/RentCard',
  component: RentCard,
  args: {
    appointment: rent
  },
  decorators: [
    Story => (
      <div style={{ width: '485px', height: '215px' }} >
        {Story()}
      </div>
    )
  ]
} as Meta<RentCardProps>

export const Default: StoryObj<RentCardProps> = {}
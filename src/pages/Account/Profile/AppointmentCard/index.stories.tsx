import { AppointmentCard, AppointmentCardProps } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { appointment } from '..'

export default {
  title: 'Components/Profile/AppointmentCard',
  component: AppointmentCard,
  args: {
    appointment: appointment
  },
  decorators: [
    Story => (
      <div style={{ width: '485px', height: '215px' }} >
        {Story()}
      </div>
    )
  ]
} as Meta<AppointmentCardProps>

export const Default: StoryObj<AppointmentCardProps> = {}
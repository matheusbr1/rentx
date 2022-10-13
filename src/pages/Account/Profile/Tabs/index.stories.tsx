import { Tabs } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Profile/Tabs',
  component: Tabs,
  decorators: [
    Story => (
      <div style={{ maxWidth: 400, background: '#FFF', padding: '1rem' }} >
        {Story()}
      </div>
    )
  ]
} as Meta

export const Default: StoryObj = {}
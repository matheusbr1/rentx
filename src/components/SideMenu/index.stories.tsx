import { SideMenu, SideMenuProps } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Components/Common/SideMenu',
  component: SideMenu,
  args: { pathname: '/account' },
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  decorators: [
    (storyFn) => (
      <Router>
        {storyFn()}
      </Router>
    )
  ]
} as Meta<SideMenuProps>

export const Default: StoryObj<SideMenuProps> = {}
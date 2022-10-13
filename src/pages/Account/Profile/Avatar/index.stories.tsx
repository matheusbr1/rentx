import { Avatar, AvatarProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Profile/Avatar',
  component: Avatar,
  args: {
    imageSource: 'https://lh3.googleusercontent.com/a/ALm5wu2F4e66k4Am3qQkT4hB3MPApOs8neetrTJChf8T04k=s288-p-rw-no',
    name: 'Nome'
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}
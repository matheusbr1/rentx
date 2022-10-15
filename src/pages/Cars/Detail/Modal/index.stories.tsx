import { Modal, ModalProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Car/Modal',
  component: Modal,
  args: {
    defaultOpen: true,
    onConfirm: () => {}
  }
} as Meta<ModalProps>

export const Primary: StoryObj<ModalProps> = {}

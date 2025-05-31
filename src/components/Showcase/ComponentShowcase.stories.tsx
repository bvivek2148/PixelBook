import type { Meta, StoryObj } from '@storybook/react'
import { ComponentShowcase } from './ComponentShowcase'

const meta = {
  title: 'Showcase/Complete Design System',
  component: ComponentShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive showcase of all Pixelbook design system components in action.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComponentShowcase>

export default meta

export const FullShowcase: StoryObj<typeof ComponentShowcase> = {
  render: () => <ComponentShowcase />,
}

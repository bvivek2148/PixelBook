import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { FiMail, FiArrowRight } from 'react-icons/fi'

const meta = {
  title: 'Components/Input/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

export const ButtonVariants: StoryObj<typeof Button> = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="space-x-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="space-x-4">
        <Button leftIcon={<FiMail />}>With Left Icon</Button>
        <Button rightIcon={<FiArrowRight />}>With Right Icon</Button>
        <Button isLoading>Loading</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  ),
}
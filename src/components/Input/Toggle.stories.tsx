import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './Toggle'

const meta = {
  title: 'Components/Input/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta

export const ToggleExample: StoryObj<typeof Toggle> = {
  render: () => (
    <div className="space-y-4">
      <Toggle
        label="Notifications"
        helperText="Receive email notifications"
      />
      <Toggle
        label="Dark Mode"
        size="lg"
      />
      <Toggle
        label="Maintenance Mode"
        disabled
      />
    </div>
  ),
}
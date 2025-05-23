import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './TextInput'
import { Dropdown } from './Dropdown'

const meta = {
  title: 'Components/Input',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

export const TextInputExample: StoryObj<typeof TextInput> = {
  render: () => (
    <div className="space-y-4 w-80">
      <TextInput
        label="Username"
        placeholder="Enter your username"
        helperText="This will be your display name"
      />
      <TextInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
        status="error"
        errorText="Please enter a valid email address"
      />
      <TextInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        disabled
      />
    </div>
  ),
}

export const DropdownExample: StoryObj<typeof Dropdown> = {
  render: () => (
    <div className="space-y-4 w-80">
      <Dropdown
        label="Country"
        placeholder="Select your country"
        options={[
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'ca', label: 'Canada' },
        ]}
      />
      <Dropdown
        label="Language"
        placeholder="Select your language"
        status="error"
        errorText="Please select a language"
        options={[
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French', disabled: true },
        ]}
      />
    </div>
  ),
}
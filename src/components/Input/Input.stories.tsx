import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './TextInput'
import { Dropdown } from './Dropdown'
import { FiMail, FiLock, FiSearch, FiUser, FiEye } from 'react-icons/fi'

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
    <div className="space-y-8 p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Input Components
        </h1>
        <p className="text-neutral-600 text-lg">Modern form inputs with enhanced user experience</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Basic Inputs */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v8h12V6H4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800">Basic Text Inputs</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <TextInput
              label="Confirmed"
              placeholder="Success state"
              status="success"
              helperText="This field is valid"
            />
          </div>
        </div>

        {/* With Icons */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800">With Icons</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInput
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              leftIcon={<FiMail />}
            />
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              leftIcon={<FiLock />}
              rightIcon={<FiEye />}
            />
            <TextInput
              label="Search"
              placeholder="Search for anything..."
              leftIcon={<FiSearch />}
            />
          </div>
        </div>

        {/* Floating Labels */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800">Floating Labels</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              floatingLabel
              leftIcon={<FiUser />}
            />
            <TextInput
              label="Email Address"
              type="email"
              floatingLabel
              leftIcon={<FiMail />}
              status="success"
              helperText="Email is available"
            />
            <TextInput
              label="Password"
              type="password"
              floatingLabel
              leftIcon={<FiLock />}
              status="error"
              errorText="Password must be at least 8 characters"
            />
          </div>
        </div>

        {/* Sizes */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800">Different Sizes</h3>
          </div>
          <div className="space-y-4">
            <TextInput
              label="Small Input"
              size="sm"
              placeholder="Small size input"
            />
            <TextInput
              label="Medium Input"
              size="md"
              placeholder="Medium size input"
            />
            <TextInput
              label="Large Input"
              size="lg"
              placeholder="Large size input"
            />
          </div>
        </div>
      </div>
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
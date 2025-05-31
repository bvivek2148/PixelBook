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
    <div className="space-y-8 p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Button Components
        </h1>
        <p className="text-neutral-600 text-lg">Interactive buttons with modern design and smooth animations</p>
      </div>

      {/* Variants */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-neutral-800">Button Variants</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="text-center space-y-3">
            <Button variant="primary" size="lg" className="w-full">Primary</Button>
            <p className="text-xs text-neutral-500 font-medium">Main actions</p>
          </div>
          <div className="text-center space-y-3">
            <Button variant="secondary" size="lg" className="w-full">Secondary</Button>
            <p className="text-xs text-neutral-500 font-medium">Alternative</p>
          </div>
          <div className="text-center space-y-3">
            <Button variant="outline" size="lg" className="w-full">Outline</Button>
            <p className="text-xs text-neutral-500 font-medium">Subtle</p>
          </div>
          <div className="text-center space-y-3">
            <Button variant="ghost" size="lg" className="w-full">Ghost</Button>
            <p className="text-xs text-neutral-500 font-medium">Minimal</p>
          </div>
          <div className="text-center space-y-3">
            <Button variant="gradient" size="lg" className="w-full">Gradient</Button>
            <p className="text-xs text-neutral-500 font-medium">Eye-catching</p>
          </div>
          <div className="text-center space-y-3">
            <Button variant="danger" size="lg" className="w-full">Danger</Button>
            <p className="text-xs text-neutral-500 font-medium">Destructive</p>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h3 className="text-lg font-semibold mb-3">With Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Button leftIcon={<FiMail />}>Email</Button>
          <Button rightIcon={<FiArrowRight />}>Continue</Button>
          <Button leftIcon={<FiMail />} rightIcon={<FiArrowRight />}>Send Email</Button>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 className="text-lg font-semibold mb-3">States</h3>
        <div className="flex flex-wrap gap-3">
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button variant="gradient" isLoading>Loading Gradient</Button>
        </div>
      </div>

      {/* Special Styles */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Special Styles</h3>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-3">
            <Button rounded>Rounded</Button>
            <Button rounded variant="gradient">Rounded Gradient</Button>
            <Button rounded leftIcon={<FiMail />}>Rounded with Icon</Button>
          </div>
          <div>
            <Button fullWidth variant="primary">Full Width Button</Button>
          </div>
        </div>
      </div>
    </div>
  ),
}
import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta

export const SpinnerVariants: StoryObj<typeof Spinner> = {
  render: () => (
    <div className="space-y-6 p-6">
      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Sizes</h3>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <Spinner size="xs" />
            <p className="text-xs mt-2">Extra Small</p>
          </div>
          <div className="text-center">
            <Spinner size="sm" />
            <p className="text-xs mt-2">Small</p>
          </div>
          <div className="text-center">
            <Spinner size="md" />
            <p className="text-xs mt-2">Medium</p>
          </div>
          <div className="text-center">
            <Spinner size="lg" />
            <p className="text-xs mt-2">Large</p>
          </div>
          <div className="text-center">
            <Spinner size="xl" />
            <p className="text-xs mt-2">Extra Large</p>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Variants</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Spinner variant="default" size="lg" />
            <p className="text-sm mt-2">Default</p>
          </div>
          <div className="text-center">
            <Spinner variant="dots" size="lg" />
            <p className="text-sm mt-2">Dots</p>
          </div>
          <div className="text-center">
            <Spinner variant="pulse" size="lg" />
            <p className="text-sm mt-2">Pulse</p>
          </div>
          <div className="text-center">
            <Spinner variant="bars" size="lg" />
            <p className="text-sm mt-2">Bars</p>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Custom Colors</h3>
        <div className="flex items-center space-x-6">
          <Spinner size="lg" color="#3b82f6" />
          <Spinner variant="dots" size="lg" color="#10b981" />
          <Spinner variant="pulse" size="lg" color="#f59e0b" />
          <Spinner variant="bars" size="lg" color="#ef4444" />
          <Spinner size="lg" color="#8b5cf6" />
        </div>
      </div>

      {/* In Context */}
      <div>
        <h3 className="text-lg font-semibold mb-3">In Context</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-4 bg-neutral-50 rounded-lg">
            <Spinner size="sm" />
            <span>Loading data...</span>
          </div>

          <div className="flex items-center justify-center p-8 bg-neutral-50 rounded-lg">
            <div className="text-center">
              <Spinner variant="dots" size="lg" color="#3b82f6" />
              <p className="mt-3 text-neutral-600">Please wait while we process your request</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}
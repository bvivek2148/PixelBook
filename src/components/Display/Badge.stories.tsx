import type { Meta, StoryObj } from '@storybook/react'
import { Badge, NotificationBadge } from './Badge'

const meta = {
  title: 'Components/Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta

export const BadgeVariants: StoryObj<typeof Badge> = {
  render: () => (
    <div className="space-y-8 p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Badge Components
        </h1>
        <p className="text-neutral-600 text-lg">Beautiful, versatile badges for status, labels, and notifications</p>
      </div>

      {/* Basic Variants */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-neutral-800">Color Variants</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <div className="text-center space-y-3">
            <Badge variant="default" size="lg">Default</Badge>
            <p className="text-xs text-neutral-500 font-medium">Neutral</p>
          </div>
          <div className="text-center space-y-3">
            <Badge variant="primary" size="lg">Primary</Badge>
            <p className="text-xs text-neutral-500 font-medium">Brand</p>
          </div>
          <div className="text-center space-y-3">
            <Badge variant="secondary" size="lg">Secondary</Badge>
            <p className="text-xs text-neutral-500 font-medium">Subtle</p>
          </div>
          <div className="text-center space-y-3">
            <Badge variant="success" size="lg">Success</Badge>
            <p className="text-xs text-neutral-500 font-medium">Positive</p>
          </div>
          <div className="text-center space-y-3">
            <Badge variant="warning" size="lg">Warning</Badge>
            <p className="text-xs text-neutral-500 font-medium">Caution</p>
          </div>
          <div className="text-center space-y-3">
            <Badge variant="error" size="lg">Error</Badge>
            <p className="text-xs text-neutral-500 font-medium">Danger</p>
          </div>
          <div className="text-center space-y-3">
            <Badge variant="purple" size="lg">Purple</Badge>
            <p className="text-xs text-neutral-500 font-medium">Creative</p>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-success-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-neutral-800">Size Options</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="text-center space-y-3">
            <Badge size="sm" variant="primary">Small</Badge>
            <p className="text-xs text-neutral-500 font-medium">Compact</p>
          </div>
          <div className="text-center space-y-3">
            <Badge size="md" variant="primary">Medium</Badge>
            <p className="text-xs text-neutral-500 font-medium">Standard</p>
          </div>
          <div className="text-center space-y-3">
            <Badge size="lg" variant="primary">Large</Badge>
            <p className="text-xs text-neutral-500 font-medium">Prominent</p>
          </div>
        </div>
      </div>

      {/* With Status Dots */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-warning-500 to-orange-500 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-neutral-800">Status Indicators</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-3 p-4 bg-neutral-50 rounded-xl">
            <Badge variant="success" dot size="lg">Online</Badge>
            <p className="text-xs text-neutral-500 font-medium">User is active</p>
          </div>
          <div className="text-center space-y-3 p-4 bg-neutral-50 rounded-xl">
            <Badge variant="warning" dot size="lg">Away</Badge>
            <p className="text-xs text-neutral-500 font-medium">Temporarily away</p>
          </div>
          <div className="text-center space-y-3 p-4 bg-neutral-50 rounded-xl">
            <Badge variant="error" dot size="lg">Offline</Badge>
            <p className="text-xs text-neutral-500 font-medium">Not available</p>
          </div>
          <div className="text-center space-y-3 p-4 bg-neutral-50 rounded-xl">
            <Badge variant="primary" dot size="lg">Active</Badge>
            <p className="text-xs text-neutral-500 font-medium">Currently working</p>
          </div>
        </div>
      </div>

      {/* Removable */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Removable</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary" removable onRemove={() => alert('Removed!')}>
            React
          </Badge>
          <Badge variant="success" removable onRemove={() => alert('Removed!')}>
            TypeScript
          </Badge>
          <Badge variant="purple" removable onRemove={() => alert('Removed!')}>
            Tailwind
          </Badge>
        </div>
      </div>

      {/* Notification Badges */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Notification Badges</h3>
        <div className="flex flex-wrap items-center gap-6">
          <div className="relative">
            <button className="p-2 bg-neutral-100 rounded-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <NotificationBadge count={3} className="absolute -top-1 -right-1" />
          </div>

          <div className="relative">
            <button className="p-2 bg-neutral-100 rounded-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </button>
            <NotificationBadge count={99} className="absolute -top-1 -right-1" />
          </div>

          <div className="relative">
            <button className="p-2 bg-neutral-100 rounded-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </button>
            <NotificationBadge count={150} max={99} className="absolute -top-1 -right-1" />
          </div>

          <div className="relative">
            <button className="p-2 bg-neutral-100 rounded-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </button>
            <NotificationBadge count={0} showZero className="absolute -top-1 -right-1" />
          </div>
        </div>
      </div>

      {/* In Context */}
      <div>
        <h3 className="text-lg font-semibold mb-3">In Context</h3>
        <div className="space-y-4">
          <div className="p-4 bg-neutral-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Project Status</h4>
                <p className="text-sm text-neutral-600">Current development phase</p>
              </div>
              <Badge variant="success" dot>In Progress</Badge>
            </div>
          </div>

          <div className="p-4 bg-neutral-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">User Role</h4>
                <p className="text-sm text-neutral-600">Access level permissions</p>
              </div>
              <Badge variant="primary">Administrator</Badge>
            </div>
          </div>

          <div className="p-4 bg-neutral-50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Tags:</span>
              <Badge variant="secondary" size="sm" removable>Frontend</Badge>
              <Badge variant="secondary" size="sm" removable>React</Badge>
              <Badge variant="secondary" size="sm" removable>TypeScript</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

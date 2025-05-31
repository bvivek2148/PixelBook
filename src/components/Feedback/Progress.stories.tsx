import type { Meta, StoryObj } from '@storybook/react'
import { Progress, CircularProgress, StepProgress } from './Progress'

const meta = {
  title: 'Components/Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta

export const ProgressVariants: StoryObj<typeof Progress> = {
  render: () => (
    <div className="space-y-8 p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Progress Components
        </h1>
        <p className="text-neutral-600 text-lg">Beautiful progress indicators for loading states and workflows</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Linear Progress */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800">Linear Progress Bars</h3>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Progress value={25} variant="default" showLabel label="Default Progress" />
              </div>
              <div>
                <Progress value={50} variant="success" showLabel label="Success State" />
              </div>
              <div>
                <Progress value={75} variant="warning" showLabel label="Warning State" />
              </div>
              <div>
                <Progress value={90} variant="error" showLabel label="Error State" />
              </div>
            </div>
            <div className="mt-6">
              <Progress value={60} variant="gradient" showLabel label="Gradient Progress" size="lg" />
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800">Different Sizes</h3>
          </div>
          <div className="space-y-4">
            <Progress value={40} size="sm" showLabel label="Small Progress" />
            <Progress value={60} size="md" showLabel label="Medium Progress" />
            <Progress value={80} size="lg" showLabel label="Large Progress" />
          </div>
        </div>

        {/* Animated */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800">Animated Progress</h3>
          </div>
          <div className="space-y-4">
            <Progress value={45} animated showLabel label="Animated Progress" />
            <Progress value={70} striped showLabel label="Striped Progress" />
            <Progress value={85} animated striped variant="gradient" showLabel label="Animated + Striped" />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const CircularProgressVariants: StoryObj<typeof CircularProgress> = {
  render: () => (
    <div className="space-y-8 p-6">
      {/* Basic Circular */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Circular Progress</h3>
        <div className="flex flex-wrap gap-6">
          <CircularProgress value={25} variant="default" />
          <CircularProgress value={50} variant="success" />
          <CircularProgress value={75} variant="warning" />
          <CircularProgress value={90} variant="error" />
          <CircularProgress value={60} variant="gradient" />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Sizes</h3>
        <div className="flex flex-wrap gap-6 items-center">
          <CircularProgress value={65} size={80} strokeWidth={6} />
          <CircularProgress value={65} size={120} strokeWidth={8} />
          <CircularProgress value={65} size={160} strokeWidth={10} />
        </div>
      </div>

      {/* Without Labels */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Without Labels</h3>
        <div className="flex flex-wrap gap-6">
          <CircularProgress value={30} showLabel={false} variant="success" />
          <CircularProgress value={60} showLabel={false} variant="warning" />
          <CircularProgress value={90} showLabel={false} variant="error" />
        </div>
      </div>
    </div>
  ),
}

export const StepProgressVariants: StoryObj<typeof StepProgress> = {
  render: () => (
    <div className="space-y-8 p-6">
      {/* Basic Steps */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Step Progress</h3>
        <StepProgress
          steps={[
            { label: 'Account', description: 'Create account', completed: true },
            { label: 'Profile', description: 'Setup profile', completed: true },
            { label: 'Verification', description: 'Verify email', current: true },
            { label: 'Complete', description: 'All done' },
          ]}
        />
      </div>

      {/* Different Variants */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Variants</h3>
        <div className="space-y-6">
          <StepProgress
            variant="success"
            steps={[
              { label: 'Start', completed: true },
              { label: 'Progress', completed: true },
              { label: 'Finish', current: true },
            ]}
          />
          
          <StepProgress
            variant="warning"
            steps={[
              { label: 'Planning', completed: true },
              { label: 'Development', completed: true },
              { label: 'Testing', current: true },
              { label: 'Deployment' },
            ]}
          />
        </div>
      </div>

      {/* Detailed Steps */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Detailed Steps</h3>
        <StepProgress
          variant="gradient"
          steps={[
            { 
              label: 'Order Placed', 
              description: 'Your order has been placed successfully',
              completed: true 
            },
            { 
              label: 'Processing', 
              description: 'We are preparing your order',
              completed: true 
            },
            { 
              label: 'Shipped', 
              description: 'Your order is on the way',
              current: true 
            },
            { 
              label: 'Delivered', 
              description: 'Order will be delivered soon' 
            },
          ]}
        />
      </div>
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardBody, CardFooter } from './Card'
import { Button } from '../Input/Button'
import { Badge } from '../Display/Badge'

const meta = {
  title: 'Components/Layout/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

export const CardVariants: StoryObj<typeof Card> = {
  render: () => (
    <div className="space-y-8 p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Card Components
        </h1>
        <p className="text-neutral-600 text-lg">Flexible containers for organizing and displaying content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Default Card */}
        <Card className="animate-fade-in">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v8h12V6H4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-800">Default Card</h3>
                <p className="text-neutral-600">Clean and minimal design</p>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-neutral-700 leading-relaxed">
              This is a default card with standard styling. Perfect for most use cases where you need a clean, professional container.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Standard</span>
              <span className="px-2 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Versatile</span>
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex gap-3">
              <Button size="sm" variant="primary">Primary Action</Button>
              <Button size="sm" variant="ghost">Secondary</Button>
            </div>
          </CardFooter>
        </Card>

      {/* Elevated Card */}
      <Card variant="elevated">
        <CardHeader>
          <h3 className="text-lg font-semibold">Elevated Card</h3>
          <p className="text-neutral-600">Card with enhanced shadow</p>
        </CardHeader>
        <CardBody>
          <p className="text-neutral-700">
            This elevated card has a more prominent shadow for better visual hierarchy.
          </p>
        </CardBody>
        <CardFooter>
          <Button size="sm" variant="primary">Primary Action</Button>
        </CardFooter>
      </Card>

      {/* Outlined Card */}
      <Card variant="outlined">
        <CardHeader>
          <h3 className="text-lg font-semibold">Outlined Card</h3>
          <p className="text-neutral-600">Card with prominent border</p>
        </CardHeader>
        <CardBody>
          <p className="text-neutral-700">
            This outlined card emphasizes the border for a clean, minimal look.
          </p>
        </CardBody>
        <CardFooter>
          <Button size="sm" variant="outline">Outline Action</Button>
        </CardFooter>
      </Card>

      {/* Glass Card */}
      <Card variant="glass">
        <CardHeader>
          <h3 className="text-lg font-semibold">Glass Card</h3>
          <p className="text-neutral-600">Card with glassmorphism effect</p>
        </CardHeader>
        <CardBody>
          <p className="text-neutral-700">
            This glass card uses backdrop blur for a modern, translucent appearance.
          </p>
        </CardBody>
        <CardFooter>
          <Button size="sm" variant="gradient">Gradient Action</Button>
        </CardFooter>
      </Card>
      </div>
    </div>
  ),
}

export const InteractiveCards: StoryObj<typeof Card> = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      <Card hover clickable className="cursor-pointer">
        <CardBody>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Hover Effect</h3>
            <p className="text-sm text-neutral-600">This card scales on hover</p>
          </div>
        </CardBody>
      </Card>

      <Card clickable>
        <CardBody>
          <div className="text-center">
            <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Clickable</h3>
            <p className="text-sm text-neutral-600">This card is clickable</p>
          </div>
        </CardBody>
      </Card>

      <Card variant="elevated" padding="lg">
        <CardBody>
          <div className="text-center">
            <Badge variant="purple" className="mb-3">New</Badge>
            <h3 className="font-semibold mb-2">Large Padding</h3>
            <p className="text-sm text-neutral-600">This card has extra padding</p>
          </div>
        </CardBody>
      </Card>
    </div>
  ),
}

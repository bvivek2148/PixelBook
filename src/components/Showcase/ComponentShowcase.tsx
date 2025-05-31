import React from 'react'
import { Button } from '../Input/Button'
import { Badge, NotificationBadge } from '../Display/Badge'
import { Card, CardHeader, CardBody, CardFooter } from '../Layout/Card'
import { TextInput } from '../Input/TextInput'
import { Spinner, Progress, CircularProgress } from '../Feedback'
import { FiMail, FiLock, FiUser, FiHeart, FiStar, FiTrendingUp } from 'react-icons/fi'

export const ComponentShowcase: React.FC = () => {
  return (
    <div className="space-y-12 p-8 bg-gradient-to-br from-neutral-50 via-blue-50 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-6xl font-black bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Pixelbook Design System
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          A modern, beautiful, and highly customizable component library built with React, TypeScript, and Tailwind CSS
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="gradient" size="lg" leftIcon={<FiStar />}>
            Get Started
          </Button>
          <Button variant="outline" size="lg" leftIcon={<FiTrendingUp />}>
            View Components
          </Button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Interactive Buttons */}
        <Card variant="elevated" hover className="hover-lift">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Interactive Buttons</h3>
                <Badge variant="primary" size="sm">6 Variants</Badge>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-neutral-600 mb-4">
              Beautiful buttons with smooth animations, hover effects, and loading states.
            </p>
            <div className="space-y-3">
              <Button variant="primary" fullWidth>Primary Action</Button>
              <Button variant="gradient" fullWidth leftIcon={<FiHeart />}>
                Gradient Style
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="ghost" size="sm">Ghost</Button>
                <Button variant="danger" size="sm">Danger</Button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Form Components */}
        <Card variant="elevated" hover className="hover-lift">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v8h12V6H4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Form Components</h3>
                <Badge variant="success" size="sm">Enhanced UX</Badge>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-neutral-600 mb-4">
              Modern form inputs with floating labels, icons, and smooth transitions.
            </p>
            <div className="space-y-4">
              <TextInput
                label="Email"
                placeholder="Enter your email"
                leftIcon={<FiMail />}
                floatingLabel
              />
              <TextInput
                label="Password"
                type="password"
                placeholder="Enter password"
                leftIcon={<FiLock />}
                floatingLabel
              />
            </div>
          </CardBody>
        </Card>

        {/* Progress & Feedback */}
        <Card variant="elevated" hover className="hover-lift">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Progress & Feedback</h3>
                <Badge variant="purple" size="sm">Animated</Badge>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-neutral-600 mb-4">
              Loading states, progress indicators, and feedback components.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Spinner variant="dots" />
                <Spinner variant="pulse" />
                <Spinner variant="bars" />
              </div>
              <Progress value={75} variant="gradient" showLabel />
              <div className="flex justify-center">
                <CircularProgress value={85} size={80} variant="success" />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Status Badges Showcase */}
      <div className="max-w-4xl mx-auto">
        <Card variant="glass" padding="lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-neutral-800 mb-2">Status & Notifications</h2>
            <p className="text-neutral-600">Comprehensive badge system for status indicators and notifications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-neutral-700">Status Badges</h4>
              <div className="flex flex-wrap gap-3">
                <Badge variant="success" dot>Online</Badge>
                <Badge variant="warning" dot>Away</Badge>
                <Badge variant="error" dot>Offline</Badge>
                <Badge variant="primary" dot>Active</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-neutral-700">Notification Badges</h4>
              <div className="flex gap-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <NotificationBadge count={3} className="absolute -top-1 -right-1" />
                </div>
                <div className="relative">
                  <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center">
                    <FiUser className="w-5 h-5" />
                  </div>
                  <NotificationBadge count={99} className="absolute -top-1 -right-1" />
                </div>
                <div className="relative">
                  <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center">
                    <FiHeart className="w-5 h-5" />
                  </div>
                  <NotificationBadge count={150} max={99} className="absolute -top-1 -right-1" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <Card variant="gradient" padding="xl" className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Amazing UIs?</h2>
          <p className="text-white/90 text-lg mb-8">
            Start using Pixelbook components in your next project and create beautiful, accessible interfaces.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg">
              Documentation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-900">
              GitHub
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

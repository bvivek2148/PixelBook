import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'

const meta = {
  title: 'Components/Feedback',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

export const ToastExample: StoryObj<typeof Toast> = {
  render: () => (
    <div className="space-y-4">
      <Toast
        type="info"
        message="This is an information message"
      />
      <Toast
        type="success"
        message="Operation completed successfully!"
      />
      <Toast
        type="error"
        message="An error occurred. Please try again."
      />
      <Toast
        type="warning"
        message="Please save your changes before leaving."
      />
    </div>
  ),
}
import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta = {
  title: 'Components/Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta

export const ModalExample: StoryObj<typeof Modal> = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-primary-500 text-white rounded-md"
        >
          Open Modal
        </button>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Confirmation"
        >
          <div className="space-y-4">
            <p>Are you sure you want to proceed with this action?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-neutral-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-primary-500 text-white rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </Modal>
      </div>
    )
  },
}
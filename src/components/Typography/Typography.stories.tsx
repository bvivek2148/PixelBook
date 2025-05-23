import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'
import { Paragraph } from './Paragraph'
import { Label } from './Label'

const meta = {
  title: 'Components/Typography',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

export const HeadingExample: StoryObj<typeof Heading> = {
  render: () => (
    <div className="space-y-4">
      <Heading as="h1" size="4xl">Heading 1 (4xl)</Heading>
      <Heading as="h2" size="3xl">Heading 2 (3xl)</Heading>
      <Heading as="h3" size="2xl">Heading 3 (2xl)</Heading>
      <Heading as="h4" size="xl">Heading 4 (xl)</Heading>
      <Heading as="h5" size="lg">Heading 5 (lg)</Heading>
      <Heading as="h6" size="base">Heading 6 (base)</Heading>
    </div>
  ),
}

export const ParagraphExample: StoryObj<typeof Paragraph> = {
  render: () => (
    <div className="space-y-4">
      <Paragraph size="lg">
        Large paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph>
        Default paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph size="sm">
        Small paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
    </div>
  ),
}

export const LabelExample: StoryObj<typeof Label> = {
  render: () => (
    <div className="space-y-4">
      <Label size="base">Base Label</Label>
      <Label>Default Label</Label>
      <Label size="xs">Small Label</Label>
    </div>
  ),
}
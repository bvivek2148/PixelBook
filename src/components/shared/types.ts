export type Size = 'sm' | 'md' | 'lg'
export type Status = 'default' | 'error' | 'success'
export type Variant = 'primary' | 'secondary' | 'outline'

export interface BaseInputProps {
  id?: string
  name?: string
  disabled?: boolean
  required?: boolean
  status?: Status
  size?: Size
  className?: string
  'aria-label'?: string
  'aria-describedby'?: string
}
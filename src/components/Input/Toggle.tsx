import { forwardRef, InputHTMLAttributes } from 'react'
import { BaseInputProps } from '../shared/types'
import { Label } from '../Typography/Label'

interface ToggleProps extends BaseInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string
  helperText?: string
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>((
  {
    id,
    label,
    helperText,
    size = 'md',
    disabled = false,
    className = '',
    ...props
  },
  ref
) => {
  const toggleSizes = {
    sm: 'w-8 h-4',
    md: 'w-10 h-5',
    lg: 'w-12 h-6',
  }

  const knobSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          ref={ref}
          type="checkbox"
          className="sr-only peer"
          disabled={disabled}
          {...props}
        />
        <div
          className={[
            toggleSizes[size],
            'bg-neutral-200 peer-focus:outline-none peer-focus:ring-4',
            'peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800',
            'rounded-full peer dark:bg-neutral-700',
            'peer-checked:after:translate-x-full peer-checked:after:border-white',
            'peer-checked:bg-primary-600',
            'after:content-[""] after:absolute after:bg-white',
            'after:rounded-full after:transition-all',
            `after:${knobSizes[size]}`,
            'after:m-0.5',
            disabled ? 'opacity-50 cursor-not-allowed' : '',
          ].join(' ')}
        />
        {label && (
          <Label className="ml-3 text-sm font-medium">
            {label}
          </Label>
        )}
      </label>
      {helperText && (
        <p className="mt-1 text-sm text-neutral-500">{helperText}</p>
      )}
    </div>
  )
})

Toggle.displayName = 'Toggle'
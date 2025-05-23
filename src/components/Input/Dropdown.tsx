import { forwardRef, SelectHTMLAttributes } from 'react'
import { BaseInputProps } from '../shared/types'
import { Label } from '../Typography/Label'

interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
}

interface DropdownProps extends BaseInputProps, Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string
  helperText?: string
  errorText?: string
  options: DropdownOption[]
  placeholder?: string
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>((
  {
    id,
    label,
    helperText,
    errorText,
    options,
    placeholder,
    status = 'default',
    size = 'md',
    disabled = false,
    required = false,
    className = '',
    ...props
  },
  ref
) => {
  const selectSizes = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2',
    lg: 'px-4 py-3 text-lg',
  }

  const statusStyles = {
    default: 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500',
    error: 'border-error-500 focus:border-error-500 focus:ring-error-500',
    success: 'border-success-500 focus:border-success-500 focus:ring-success-500',
  }

  const baseClasses = [
    'block w-full rounded-md border',
    'bg-white dark:bg-neutral-800',
    'shadow-sm focus:ring-2 focus:ring-opacity-50',
    disabled && 'cursor-not-allowed opacity-50',
    selectSizes[size],
    statusStyles[status],
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className="w-full">
      {label && (
        <Label htmlFor={id} className="mb-1 block">
          {label}
          {required && <span className="text-error-500">*</span>}
        </Label>
      )}
      <select
        ref={ref}
        id={id}
        disabled={disabled}
        required={required}
        className={baseClasses}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      {(helperText || errorText) && (
        <p className={`mt-1 text-sm ${status === 'error' ? 'text-error-500' : 'text-neutral-500'}`}>
          {status === 'error' ? errorText : helperText}
        </p>
      )}
    </div>
  )
})

Dropdown.displayName = 'Dropdown'
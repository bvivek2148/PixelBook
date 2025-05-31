import { forwardRef, InputHTMLAttributes, useState, useEffect } from 'react'
import { BaseInputProps } from '../shared/types'
import { Label } from '../Typography/Label'

interface TextInputProps extends BaseInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  helperText?: string
  errorText?: string
  floatingLabel?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((
  {
    id,
    label,
    helperText,
    errorText,
    floatingLabel = false,
    leftIcon,
    rightIcon,
    status = 'default',
    size = 'md',
    disabled = false,
    required = false,
    className = '',
    value,
    defaultValue,
    ...props
  },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  useEffect(() => {
    setHasValue(Boolean(value || defaultValue))
  }, [value, defaultValue])

  const inputSizes = {
    sm: floatingLabel ? 'px-3 pt-5 pb-2 text-sm' : 'px-3 py-2 text-sm',
    md: floatingLabel ? 'px-4 pt-6 pb-2 text-base' : 'px-4 py-3 text-base',
    lg: floatingLabel ? 'px-4 pt-7 pb-3 text-lg' : 'px-4 py-4 text-lg',
  }

  const iconPadding = {
    sm: leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '',
    md: leftIcon ? 'pl-12' : rightIcon ? 'pr-12' : '',
    lg: leftIcon ? 'pl-14' : rightIcon ? 'pr-14' : '',
  }

  const statusStyles = {
    default: [
      'border-neutral-300 text-neutral-900',
      'focus:border-primary-500 focus:ring-primary-500',
      'hover:border-neutral-400',
    ].join(' '),
    error: [
      'border-error-500 text-neutral-900',
      'focus:border-error-500 focus:ring-error-500',
    ].join(' '),
    success: [
      'border-success-500 text-neutral-900',
      'focus:border-success-500 focus:ring-success-500',
    ].join(' '),
  }

  const baseClasses = [
    'block w-full rounded-lg border-2',
    'bg-white dark:bg-neutral-800',
    'transition-all duration-200 ease-in-out',
    'focus:ring-2 focus:ring-opacity-20 focus:outline-none',
    'placeholder-neutral-400',
    disabled && 'cursor-not-allowed opacity-50',
    inputSizes[size],
    iconPadding[size],
    statusStyles[status],
    className,
  ].filter(Boolean).join(' ')

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    props.onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    setHasValue(Boolean(e.target.value))
    props.onBlur?.(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(Boolean(e.target.value))
    props.onChange?.(e)
  }

  return (
    <div className="w-full">
      <div className="relative">
        {/* Icons */}
        {leftIcon && (
          <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none ${
            size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
          }`}>
            {leftIcon}
          </div>
        )}

        {rightIcon && (
          <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none ${
            size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
          }`}>
            {rightIcon}
          </div>
        )}

        {/* Input */}
        <input
          ref={ref}
          id={id}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          required={required}
          className={baseClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={floatingLabel ? '' : props.placeholder}
          {...props}
        />

        {/* Floating Label */}
        {floatingLabel && label && (
          <Label
            htmlFor={id}
            className={`absolute left-4 transition-all duration-200 ease-in-out pointer-events-none ${
              isFocused || hasValue
                ? size === 'sm'
                  ? 'top-1.5 text-xs text-primary-600'
                  : size === 'lg'
                  ? 'top-2 text-sm text-primary-600'
                  : 'top-2 text-sm text-primary-600'
                : size === 'sm'
                ? 'top-2.5 text-sm text-neutral-500'
                : size === 'lg'
                ? 'top-4 text-lg text-neutral-500'
                : 'top-3.5 text-base text-neutral-500'
            } ${leftIcon ? (size === 'sm' ? 'left-10' : size === 'lg' ? 'left-14' : 'left-12') : 'left-4'}`}
          >
            {label}
            {required && <span className="text-error-500 ml-1">*</span>}
          </Label>
        )}

        {/* Regular Label */}
        {!floatingLabel && label && (
          <Label htmlFor={id} className="mb-2 block text-sm font-medium text-neutral-700">
            {label}
            {required && <span className="text-error-500 ml-1">*</span>}
          </Label>
        )}
      </div>

      {/* Helper/Error Text */}
      {(helperText || errorText) && (
        <p className={`mt-2 text-sm animate-fade-in ${
          status === 'error' ? 'text-error-500' : 'text-neutral-500'
        }`}>
          {status === 'error' ? errorText : helperText}
        </p>
      )}
    </div>
  )
})

TextInput.displayName = 'TextInput'
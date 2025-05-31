import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Spinner } from '../Feedback/Spinner'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'danger'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  rounded?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  rounded = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = [
    'inline-flex items-center justify-center font-medium',
    'transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'transform active:scale-95',
    'relative overflow-hidden',
    fullWidth && 'w-full',
    rounded ? 'rounded-full' : 'rounded-lg',
  ].filter(Boolean).join(' ')

  const variants = {
    primary: [
      'bg-primary-600 text-white shadow-lg',
      'hover:bg-primary-700 hover:shadow-xl hover:-translate-y-0.5',
      'focus:ring-primary-500',
      'active:bg-primary-800',
    ].join(' '),
    secondary: [
      'bg-neutral-100 text-neutral-900 shadow-md',
      'hover:bg-neutral-200 hover:shadow-lg hover:-translate-y-0.5',
      'focus:ring-neutral-500',
      'active:bg-neutral-300',
    ].join(' '),
    outline: [
      'border-2 border-primary-600 text-primary-600 bg-transparent',
      'hover:bg-primary-50 hover:border-primary-700 hover:-translate-y-0.5',
      'focus:ring-primary-500',
      'active:bg-primary-100',
    ].join(' '),
    ghost: [
      'text-neutral-600 bg-transparent',
      'hover:bg-neutral-100 hover:text-neutral-900',
      'focus:ring-neutral-500',
      'active:bg-neutral-200',
    ].join(' '),
    gradient: [
      'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg',
      'hover:from-primary-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-0.5',
      'focus:ring-primary-500',
      'active:from-primary-800 active:to-purple-800',
    ].join(' '),
    danger: [
      'bg-error-600 text-white shadow-lg',
      'hover:bg-error-700 hover:shadow-xl hover:-translate-y-0.5',
      'focus:ring-error-500',
      'active:bg-error-800',
    ].join(' '),
  }

  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }

  return (
    <button
      className={twMerge(
        baseStyles,
        variants[variant],
        sizes[size],
        (disabled || isLoading) && [
          'opacity-50 cursor-not-allowed',
          'hover:transform-none hover:shadow-none hover:translate-y-0',
          'active:scale-100'
        ].join(' '),
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Shimmer effect for gradient buttons */}
      {variant === 'gradient' && !disabled && !isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
      )}

      {leftIcon && (
        <span className={twMerge(
          'transition-transform duration-200',
          isLoading ? 'opacity-0' : 'opacity-100',
          children ? 'mr-2' : ''
        )}>
          {leftIcon}
        </span>
      )}

      {isLoading && (
        <Spinner
          size={size === 'xs' ? 'sm' : size === 'xl' ? 'lg' : 'sm'}
          className={children || rightIcon ? 'mr-2' : ''}
        />
      )}

      {children && (
        <span className={twMerge(
          'transition-opacity duration-200',
          isLoading && leftIcon ? 'opacity-0' : 'opacity-100'
        )}>
          {children}
        </span>
      )}

      {rightIcon && (
        <span className={twMerge(
          'transition-transform duration-200',
          isLoading ? 'opacity-0' : 'opacity-100',
          children ? 'ml-2' : ''
        )}>
          {rightIcon}
        </span>
      )}
    </button>
  )
}
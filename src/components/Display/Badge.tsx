import React from 'react'
import { twMerge } from 'tailwind-merge'

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'purple'
export type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
  removable?: boolean
  onRemove?: () => void
  children: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  removable = false,
  onRemove,
  className,
  ...props
}) => {
  const baseStyles = [
    'inline-flex items-center font-medium rounded-full',
    'transition-all duration-200 ease-in-out',
    'animate-scale-in',
  ].join(' ')

  const variants = {
    default: 'bg-neutral-100 text-neutral-800 border border-neutral-300',
    primary: 'bg-primary-100 text-primary-800 border border-primary-300',
    secondary: 'bg-neutral-100 text-neutral-600 border border-neutral-200',
    success: 'bg-success-100 text-success-800 border border-success-300',
    warning: 'bg-warning-100 text-warning-800 border border-warning-300',
    error: 'bg-error-100 text-error-800 border border-error-300',
    purple: 'bg-purple-100 text-purple-800 border border-purple-300',
  }

  const sizes = {
    sm: dot ? 'px-1.5 py-0.5 text-xs' : 'px-2 py-1 text-xs',
    md: dot ? 'px-2 py-1 text-sm' : 'px-2.5 py-1.5 text-sm',
    lg: dot ? 'px-2.5 py-1.5 text-base' : 'px-3 py-2 text-base',
  }

  const dotColors = {
    default: 'bg-neutral-400',
    primary: 'bg-primary-500',
    secondary: 'bg-neutral-400',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
    purple: 'bg-purple-500',
  }

  return (
    <span
      className={twMerge(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={twMerge(
            'w-2 h-2 rounded-full mr-1.5',
            dotColors[variant]
          )}
        />
      )}
      
      {children}
      
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className={twMerge(
            'ml-1.5 inline-flex items-center justify-center',
            'w-4 h-4 rounded-full',
            'hover:bg-black/10 focus:outline-none focus:bg-black/10',
            'transition-colors duration-150'
          )}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  )
}

// Notification Badge (for counters)
export interface NotificationBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  count: number
  max?: number
  showZero?: boolean
  variant?: BadgeVariant
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  max = 99,
  showZero = false,
  variant = 'error',
  className,
  ...props
}) => {
  if (count === 0 && !showZero) return null

  const displayCount = count > max ? `${max}+` : count.toString()

  return (
    <span
      className={twMerge(
        'inline-flex items-center justify-center',
        'px-2 py-1 text-xs font-bold leading-none',
        'rounded-full animate-scale-in',
        variant === 'error' && 'bg-error-500 text-white',
        variant === 'primary' && 'bg-primary-500 text-white',
        variant === 'success' && 'bg-success-500 text-white',
        variant === 'warning' && 'bg-warning-500 text-white',
        className
      )}
      {...props}
    >
      {displayCount}
    </span>
  )
}

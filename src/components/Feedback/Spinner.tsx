import React from 'react'
import { twMerge } from 'tailwind-merge'

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SpinnerVariant = 'default' | 'dots' | 'pulse' | 'bars'

export interface SpinnerProps {
  size?: SpinnerSize
  variant?: SpinnerVariant
  className?: string
  color?: string
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'default',
  className,
  color = 'currentColor'
}) => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const dotSizes = {
    xs: 'w-1 h-1',
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4'
  }

  if (variant === 'dots') {
    return (
      <div className={twMerge('flex space-x-1', className)} role="status" aria-label="loading">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={twMerge(
              'rounded-full animate-pulse',
              dotSizes[size]
            )}
            style={{
              backgroundColor: color,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.4s'
            }}
          />
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div
        className={twMerge(
          'rounded-full animate-pulse-custom',
          sizes[size],
          className
        )}
        style={{ backgroundColor: color }}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  if (variant === 'bars') {
    return (
      <div className={twMerge('flex space-x-1', className)} role="status" aria-label="loading">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={twMerge(
              'animate-pulse',
              size === 'xs' ? 'w-0.5 h-3' :
              size === 'sm' ? 'w-1 h-4' :
              size === 'md' ? 'w-1 h-6' :
              size === 'lg' ? 'w-1.5 h-8' :
              'w-2 h-10'
            )}
            style={{
              backgroundColor: color,
              animationDelay: `${i * 0.15}s`,
              animationDuration: '1.2s'
            }}
          />
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  // Default spinner
  return (
    <div
      className={twMerge(
        'animate-spin rounded-full border-2 border-current border-t-transparent',
        sizes[size],
        className
      )}
      style={{ borderColor: `${color}33`, borderTopColor: color }}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
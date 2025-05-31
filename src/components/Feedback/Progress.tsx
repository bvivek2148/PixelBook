import React from 'react'
import { twMerge } from 'tailwind-merge'

export type ProgressVariant = 'default' | 'success' | 'warning' | 'error' | 'gradient'
export type ProgressSize = 'sm' | 'md' | 'lg'

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  variant?: ProgressVariant
  size?: ProgressSize
  showLabel?: boolean
  label?: string
  animated?: boolean
  striped?: boolean
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  variant = 'default',
  size = 'md',
  showLabel = false,
  label,
  animated = false,
  striped = false,
  className,
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const containerSizes = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  }

  const variants = {
    default: 'bg-primary-600',
    success: 'bg-success-600',
    warning: 'bg-warning-600',
    error: 'bg-error-600',
    gradient: 'bg-gradient-to-r from-primary-600 to-purple-600',
  }

  const containerClasses = twMerge(
    'w-full bg-neutral-200 rounded-full overflow-hidden',
    containerSizes[size],
    className
  )

  const barClasses = twMerge(
    'h-full transition-all duration-500 ease-out',
    variants[variant],
    striped && 'bg-stripes',
    animated && 'animate-pulse'
  )

  return (
    <div {...props}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-neutral-700">
            {label || 'Progress'}
          </span>
          {showLabel && (
            <span className="text-sm text-neutral-500">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      <div className={containerClasses}>
        <div
          className={barClasses}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  )
}

// Circular Progress Component
export interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  variant?: ProgressVariant
  showLabel?: boolean
  animated?: boolean
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  variant = 'default',
  showLabel = true,
  animated = false,
  className,
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const colors = {
    default: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    gradient: 'url(#gradient)',
  }

  return (
    <div
      className={twMerge('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {variant === 'gradient' && (
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        )}
        
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colors[variant]}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={twMerge(
            'transition-all duration-500 ease-out',
            animated && 'animate-pulse'
          )}
        />
      </svg>
      
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold text-neutral-700">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  )
}

// Step Progress Component
export interface StepProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Array<{
    label: string
    description?: string
    completed?: boolean
    current?: boolean
  }>
  variant?: ProgressVariant
}

export const StepProgress: React.FC<StepProgressProps> = ({
  steps,
  variant = 'default',
  className,
  ...props
}) => {
  const colors = {
    default: 'border-primary-600 bg-primary-600 text-primary-600',
    success: 'border-success-600 bg-success-600 text-success-600',
    warning: 'border-warning-600 bg-warning-600 text-warning-600',
    error: 'border-error-600 bg-error-600 text-error-600',
    gradient: 'border-primary-600 bg-gradient-to-r from-primary-600 to-purple-600 text-primary-600',
  }

  return (
    <div className={twMerge('flex items-center', className)} {...props}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <div
              className={twMerge(
                'w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-200',
                step.completed
                  ? `${colors[variant]} text-white`
                  : step.current
                  ? `border-current ${colors[variant]} bg-white`
                  : 'border-neutral-300 bg-white text-neutral-500'
              )}
            >
              {step.completed ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <div className="mt-2 text-center">
              <div className={twMerge(
                'text-sm font-medium',
                step.completed || step.current ? 'text-neutral-900' : 'text-neutral-500'
              )}>
                {step.label}
              </div>
              {step.description && (
                <div className="text-xs text-neutral-500 mt-1">
                  {step.description}
                </div>
              )}
            </div>
          </div>
          
          {index < steps.length - 1 && (
            <div
              className={twMerge(
                'flex-1 h-0.5 mx-4 transition-all duration-200',
                step.completed ? colors[variant].split(' ')[1] : 'bg-neutral-300'
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

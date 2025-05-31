import React from 'react'
import { twMerge } from 'tailwind-merge'

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'glass'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: CardPadding
  hover?: boolean
  clickable?: boolean
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  clickable = false,
  className,
  ...props
}) => {
  const baseStyles = [
    'rounded-xl transition-all duration-200 ease-in-out',
    clickable && 'cursor-pointer',
    hover && 'hover:scale-105 hover:shadow-lg',
  ].filter(Boolean).join(' ')

  const variants = {
    default: [
      'bg-white dark:bg-neutral-800',
      'border border-neutral-200 dark:border-neutral-700',
      'shadow-sm',
    ].join(' '),
    elevated: [
      'bg-white dark:bg-neutral-800',
      'shadow-lg hover:shadow-xl',
      'border-0',
    ].join(' '),
    outlined: [
      'bg-transparent',
      'border-2 border-neutral-300 dark:border-neutral-600',
      'hover:border-primary-500',
    ].join(' '),
    glass: [
      'bg-white/80 dark:bg-neutral-800/80',
      'backdrop-blur-lg',
      'border border-white/20',
      'shadow-lg',
    ].join(' '),
  }

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  }

  return (
    <div
      className={twMerge(
        baseStyles,
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Card sub-components
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={twMerge('mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-700', className)}
    {...props}
  >
    {children}
  </div>
)

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={twMerge('', className)} {...props}>
    {children}
  </div>
)

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={twMerge('mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700', className)}
    {...props}
  >
    {children}
  </div>
)

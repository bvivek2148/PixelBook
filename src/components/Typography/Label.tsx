import { BaseTypographyProps } from './types'

export const Label = ({
  children,
  size = 'sm',
  weight = 'medium',
  align = 'left',
  className = '',
}: BaseTypographyProps) => {
  const baseClasses = [
    `text-${size}`,
    `font-${weight}`,
    `text-${align}`,
    'text-neutral-800 dark:text-neutral-100',
    className,
  ].join(' ')

  return <label className={baseClasses}>{children}</label>
}
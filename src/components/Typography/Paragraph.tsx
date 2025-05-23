import { BaseTypographyProps } from './types'

export const Paragraph = ({
  children,
  size = 'base',
  weight = 'normal',
  align = 'left',
  className = '',
}: BaseTypographyProps) => {
  const baseClasses = [
    `text-${size}`,
    `font-${weight}`,
    `text-${align}`,
    'text-neutral-700 dark:text-neutral-200',
    'leading-relaxed',
    className,
  ].join(' ')

  return <p className={baseClasses}>{children}</p>
}
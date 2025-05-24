import React from 'react';
import { HeadingProps } from './types';

export const Heading = ({
  children,
  as: Tag = 'h2',
  size = '2xl',
  weight = 'bold',
  align = 'left',
  className = '',
}: HeadingProps) => {
  const baseClasses = [
    `text-${size}`,
    `font-${weight}`,
    `text-${align}`,
    'text-neutral-900 dark:text-neutral-50',
    className,
  ].join(' ')

  return <Tag className={baseClasses}>{children}</Tag>
}
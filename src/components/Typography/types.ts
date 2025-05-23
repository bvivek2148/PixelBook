import { ReactNode } from 'react'

export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
export type TextAlignment = 'left' | 'center' | 'right'

export interface BaseTypographyProps {
  children: ReactNode
  size?: TextSize
  weight?: FontWeight
  align?: TextAlignment
  className?: string
}

export interface HeadingProps extends BaseTypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
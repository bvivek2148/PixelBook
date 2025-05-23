import { useEffect, useState } from 'react'

export type ToastType = 'info' | 'success' | 'error' | 'warning'

interface ToastProps {
  type?: ToastType
  message: string
  duration?: number
  onClose?: () => void
  className?: string
}

export const Toast = ({
  type = 'info',
  message,
  duration = 3000,
  onClose,
  className = '',
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  const typeStyles = {
    info: 'bg-primary-500 text-white',
    success: 'bg-success-500 text-white',
    error: 'bg-error-500 text-white',
    warning: 'bg-warning-500 text-white',
  }

  const baseClasses = [
    'fixed bottom-4 right-4',
    'rounded-lg shadow-lg',
    'px-4 py-3',
    'flex items-center justify-between',
    'min-w-[300px] max-w-md',
    'animate-slide-up',
    typeStyles[type],
    className,
  ].join(' ')

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={baseClasses}
    >
      <p className="mr-2">{message}</p>
      <button
        onClick={() => {
          setIsVisible(false)
          onClose?.()
        }}
        className="text-white hover:opacity-80"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  )
}
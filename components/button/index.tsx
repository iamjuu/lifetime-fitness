import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export const PrimaryButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

export const SecondaryButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:text-white transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

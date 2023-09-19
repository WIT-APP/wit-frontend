import React from 'react'

interface ButtonProps {
    children: string;
    onClick?: () => void;
  }

export const Button: React.FC<ButtonProps> = ({ children,onClick }) => {
  return (
    <button  className="custom-button " onClick={onClick}>
      {children}
    </button>
  )
}


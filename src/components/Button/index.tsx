import React from 'react';

import { StyledButton } from './styles';

export type ButtonVariant = 'default' | 'success'
export type WidthVariant = 'default' | 'full'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  width?: WidthVariant
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  width = 'default',
  children, 
  ...rest 
}) => {
  return (
    <StyledButton 
      variant={variant} 
      width={width} 
      {...rest} 
    >
      {children}
    </StyledButton>
  )
}

export { Button }
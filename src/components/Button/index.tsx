import React from 'react';

import { StyledButton } from './styles';

export type ButtonVariant = 'primary' | 'secondary' | 'success'
export type WidthVariant = 'default' | 'full'
export type HoverVariant = 'primary' | 'with-effect'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  width?: WidthVariant
  hover?: HoverVariant
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  width = 'default',
  hover = 'primary',
  children, 
  ...rest 
}) => {
  return (
    <StyledButton 
      variant={variant} 
      width={width} 
      hover={hover}
      {...rest} 
    >
      {children}
    </StyledButton>
  )
}

export { Button }
import React from 'react';

import { StyledButton } from './styles';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
  children, ...rest 
}) => {
  return (
    <StyledButton {...rest} >
      {children}
    </StyledButton>
  )
}

export { Button }
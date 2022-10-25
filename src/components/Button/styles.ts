import styled from "styled-components";
import { pxToRem } from '../../styles/utils/pxToRem'
import { lighten, darken } from 'polished'
import { defaultTheme } from '../../styles/themes/default'
import { ButtonVariant, HoverVariant, WidthVariant } from ".";

interface ButtonProps {
  variant: ButtonVariant
  width: WidthVariant
  hover: HoverVariant
}

const variants = {
  primary: {
    bg: defaultTheme.colors.red.main,
    color: defaultTheme.colors.white.main
  },
  secondary: {
    bg: defaultTheme.colors.gray[50],
    color: defaultTheme.colors.gray[600]
  },
  success: {
    bg: defaultTheme.colors.green.main,
    color: defaultTheme.colors.white.main,
  }
}

export const StyledButton = styled.button<ButtonProps>`
  width: ${props => props.width === 'default' ? pxToRem(292) : '100%'};
  height: ${pxToRem(80)};
  
  background: ${props => variants[props.variant].bg};
  color: ${props => variants[props.variant].color};

  border: 1px solid;
  border-color: ${props => props.variant === 'primary' 
    ? 'transparent' 
    : props.theme.colors.gray[300]
  };
  
  font-style: normal;
  font-weight: 500;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(22)};

  position: relative;
  z-index: 1;
  overflow: hidden;

  ::after {
    content: "";
    
    background: ${props => lighten(0.075, variants[props.variant].bg)};
    
    position: absolute;
    z-index: -1;
    padding: 0.85em 0.75em;
    display: block;
    transition: all 0.4s;

    top: 0;
    bottom: 0;
    left: -100%;
    right: 100%;
  }

  transition: all 0.4s;

  &:hover {${
    props => props.hover === 'with-effect'
      ? `
        &::after {
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
      `
      : `
        border-color: ${props.theme.colors?.gray[800]};
        background: ${darken(0.15, variants[props.variant].bg)}
      `
  }}

  &:disabled {
    opacity: 0.5;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors?.gray[800]};
  }
`
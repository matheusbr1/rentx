import styled from "styled-components";
import { pxToRem } from '../../styles/utils/pxToRem'
import { lighten } from 'polished'
import { ButtonVariant, WidthVariant } from ".";

interface ButtonProps {
  variant: ButtonVariant
  width: WidthVariant
}

export const StyledButton = styled.button<ButtonProps>`
  width: ${props => props.width === 'default' ? pxToRem(292) : '100%'};
  
  height: ${pxToRem(80)};
  
  background: ${props => {
    const variants = {
      primary: props.theme.colors.red.main,
      secondary: '#F4F5F6',
      success: props.theme.colors.green.main,
    }

    return variants[props.variant]
  }};

  color: ${props => props.variant === 'primary' ? props.theme.colors.white.main : '#47474D'};

  border: 2px solid;
  border-color: ${props => props.variant === 'primary' ? 'transparent' : '#DEDEE3'};
  
  font-style: normal;
  font-weight: 500;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(22)};

  position: relative;
  z-index: 1;
  overflow: hidden;

  ::after {
    content: "";
    
    background: ${props => {
      const variants = {
        primary: props.theme.colors.red.main,
        secondary: '#F4F5F6',
        success: props.theme.colors.green.main,
      }

      return lighten(0.075, variants[props.variant])
    }};
    
    position: absolute;
    z-index: -1;
    padding: 0.85em 0.75em;
    display: block;
    transition: all 0.35s;

    top: 0;
    bottom: 0;
    left: -100%;
    right: 100%;
  }
  
  :hover::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.35s;
  }
`
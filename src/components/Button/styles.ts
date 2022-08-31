import styled from "styled-components";
import { pxToRem } from '../../styles/utils/pxToRem'
import { lighten } from 'polished'

export const StyledButton = styled.button`
  width:  ${pxToRem(292)};
  height: ${pxToRem(80)};
  background: ${props => props.theme.colors.red.main};
  color: ${props => props.theme.colors.white.main};
  font-style: normal;
  font-weight: 500;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(22)};
  border: none;

  position: relative;
  z-index: 1;
  overflow: hidden;

  ::after {
    content: "";
    background: ${props => lighten(0.2, props.theme.colors.red.main)};
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
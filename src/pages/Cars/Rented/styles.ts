import styled from "styled-components";
import { pxToRem } from "../../../styles/utils/pxToRem";
import { lighten } from 'polished'

export const Container = styled.div`
  background: ${(props) => props.theme.colors.gray[800]};
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("/assets/rentedBG.svg");
  background-repeat: no-repeat;
  background-position: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  
  max-width: ${pxToRem(420)};

  h1 {
    font-family: 'Archivo';
    font-size: ${pxToRem(54)};
    line-height: ${pxToRem(59)};
    text-align: center;
    color: ${props => props.theme.colors.white.main};
  }

  p {
    font-family: 'Inter';
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(28)};

    display: flex;
    align-items: flex-end;
    text-align: center;

    color: ${props => props.theme.colors.gray[400]};
  }
`
export const ConfirmationButton = styled.button`
  width: ${pxToRem(120)};
  height: ${pxToRem(64)};
  background: ${props => props.theme.colors.gray[700]};
  border: none;
  color: ${props => props.theme.colors.white.main};

  font-family: 'Inter';
  font-weight: 500;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(19)};

  position: relative;
  z-index: 1;
  overflow: hidden;

  ::after {
    content: "";
    
    background: ${props => lighten(0.2, props.theme.colors.gray[700])};
    
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
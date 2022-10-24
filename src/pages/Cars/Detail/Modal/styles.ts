import styled from 'styled-components'
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { pxToRem } from '../../../../styles/utils/pxToRem'

export const Root = styled(DialogPrimitive.Root)`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .dialog-overlay[data-state='open'],
  .dialog-content[data-state='open'] {
    animation: fadeIn 300ms ease-out;
  }

  .dialog-overlay[data-state='closed'],
  .dialog-content[data-state='closed'] {
    animation: fadeOut 300ms ease-in;
  }
`

export const Overlay = styled(DialogPrimitive.Overlay)`
  z-index: 99;
  background-color: ${props => props.theme.colors.black.main};
  opacity: 0.8;
  position: fixed;
  inset: 0;
`

export const Content = styled(DialogPrimitive.Content)`
  z-index: 9999;
  background-color: white;
  box-shadow: 
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px, 
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: ${pxToRem(844)};
  max-height: 95vh;

  > div {
    padding: ${pxToRem(24)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${pxToRem(64)};
    height: ${pxToRem(475)};

    > div {
      flex: 1;
    }
  }
`

export const Title = styled(DialogPrimitive.Title)`
  background: ${props => props.theme.colors.gray[800]};
  color: ${props => props.theme.colors.white.main};
  margin-top: -1px;
  padding: ${pxToRem(24)};
  
  font-family: 'Archivo';
  font-weight: 600;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(28)};

  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    color: ${props => props.theme.colors.gray[400]};
    background: none;
    border: none;
    font-size: ${pxToRem(20)};
  }
`
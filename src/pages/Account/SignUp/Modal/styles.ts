import styled from 'styled-components'
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { pxToRem } from '../../../../styles/utils/pxToRem'
import { darken } from 'polished';

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
  z-index: 999;
  background-color: white;
  box-shadow: 
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px, 
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 100vh;

  width: ${pxToRem(324)};
  height: ${pxToRem(448)};
  background: ${(props) => props.theme.colors.gray[800]};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: ${pxToRem(48)};

  background-image: url("/assets/rentxBG.svg");
  background-repeat: no-repeat;
  background-position: center;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${pxToRem(16)};

    h1 {
      font-family: 'Archivo';
      font-weight: 600;
      font-size: ${pxToRem(36)};
      line-height: ${pxToRem(39)};
      color: ${props => props.theme.colors.white.main}
    }

    p {
      font-family: 'Inter';
      font-weight: 400;
      font-size: ${pxToRem(18)};
      line-height: ${pxToRem(28)};
      color: ${props => props.theme.colors.gray[400]};
    }
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
  transition: all 0.4s;

  z-index: 1;

  :hover {
    background: ${props => darken(0.15, props.theme.colors.gray[700])};
  }
`
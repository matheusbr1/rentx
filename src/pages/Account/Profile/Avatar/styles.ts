import styled from 'styled-components'
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { pxToRem } from "../../../../styles/utils/pxToRem"
import { darken } from 'polished';

export const Avatar = styled(AvatarPrimitive.Root)`
  width: ${pxToRem(150)};
  height: ${pxToRem(150)};
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  border-radius: 100%;
  position: relative;

  #icon-button-file {
    display: none;
  }
`

export const Image = styled(AvatarPrimitive.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`

export const Fallback = styled(AvatarPrimitive.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.gray[300]};
  color: ${props => props.theme.colors.gray[800]};
  line-height: 1;
  font-weight: 500;
  border-radius: 100%;
`

export const ChangeAvatarButton = styled.span`
  border: none;
  padding: ${pxToRem(8)};
  background: ${props => props.theme.colors.red.main};
  transition: 0.2s;

  width: ${pxToRem(40)};
  height: ${pxToRem(40)};

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${props => darken(0.075, props.theme.colors.red.main)}
  }

  position: absolute;
  bottom: -4px;
  right: -4px;
`
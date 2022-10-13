import styled from 'styled-components'
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { pxToRem } from "../../../../styles/utils/pxToRem"

export const Avatar = styled(AvatarPrimitive.Root)`
  width: ${pxToRem(150)};
  height: ${pxToRem(150)};
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
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
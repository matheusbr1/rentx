import * as TabsPrimitive from '@radix-ui/react-tabs';
import styled from 'styled-components'
import { pxToRem } from '../../../../styles/utils/pxToRem';

export const Tabs = styled(TabsPrimitive.Root)`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const List = styled(TabsPrimitive.List)`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid;
  border-bottom-color: ${props => props.theme.colors.gray[100]};
`

export const Trigger = styled(TabsPrimitive.Trigger)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(17)};
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.gray[300]};
  transition: 0.2s;
  
  padding: 1rem;
  flex: 1;

  background: none;
  border: none;
  border-bottom: 2px solid transparent;

  &[data-state="active"] {
    border-bottom-color: ${props => props.theme.colors.red.main};
    color: ${props => props.theme.colors.gray[600]};
  }
`

export const Content = styled(TabsPrimitive.Content)`
  padding: 1rem 0;
  min-height: 170px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
`
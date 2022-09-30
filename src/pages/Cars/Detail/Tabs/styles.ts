import * as TabsPrimitive from '@radix-ui/react-tabs';
import styled from 'styled-components'
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { pxToRem } from '../../../../styles/utils/pxToRem';
import { lighten } from 'polished';

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
  min-height: 180px;

  .car_description {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(26)};
    color: ${props => props.theme.colors.gray[500]};
  }

  .total_amount {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 500;
    font-size: ${pxToRem(36)};
    line-height: ${pxToRem(39)};
    color: ${props => props.theme.colors.green.main};
  }
  
  .period_data_row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${pxToRem(8)} 0;
  }
`

export const Info = styled.div`
  .title {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 500;
    font-size: ${pxToRem(12)};
    line-height: ${pxToRem(13)};
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.gray[400]};
    margin-bottom: ${pxToRem(8)};
  }

  .value {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(22)};
    color: ${props => props.theme.colors.gray[600]};
  }
`

export const CalendarButton = styled.button`
  border: none;
  padding: ${pxToRem(12)};
  background: ${props => props.theme.colors.red.main};
  transition: 0.2s;

  :hover {
    background: ${props => lighten(0.075, props.theme.colors.red.main)}
  }
`

export const Separator = styled(SeparatorPrimitive.Separator)`
  width: 100%;
  height: 0px;

  margin: ${pxToRem(16)} 0;

  background-color: black;
  border: 1px solid;
  border-color: ${props => props.theme.colors.gray[100]}
`
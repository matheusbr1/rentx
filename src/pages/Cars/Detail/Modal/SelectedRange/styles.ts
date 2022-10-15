import styled from 'styled-components'
import { pxToRem } from '../../../../../styles/utils/pxToRem'

export const SelectedRangeDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  > div div:first-child {
    margin-bottom: ${pxToRem(48)};
  }
`

export const Info = styled.div`
  .title {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 500;
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(15)};
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.gray[400]};
    margin-bottom: ${pxToRem(8)};
  }

  .value {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: ${pxToRem(30)};
    line-height: ${pxToRem(36)};
    color: ${props => props.theme.colors.gray[600]};
  }
`
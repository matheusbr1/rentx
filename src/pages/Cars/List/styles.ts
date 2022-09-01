import styled from "styled-components";
import { pxToRem } from "../../../styles/utils/pxToRem";

import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const CarListWrapper = styled.div`

`

export const TitleRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: ${pxToRem(38)};

  h1 {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 600;
    font-size: ${pxToRem(36)};
    line-height: ${pxToRem(39)};
    color: ${props => props.theme.colors.gray[600]}
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(19)};
    text-align: right;
    color: ${props => props.theme.colors.gray[500]}
  }
`

export const Separator = styled(SeparatorPrimitive.Separator)`
  width: 100%;
  height: 0px;

  margin: ${pxToRem(32)} 0;

  background-color: black;
  border: 1px solid;
  border-color: ${props => props.theme.colors.gray[300]};
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${pxToRem(24)};
`

export const GridItem = styled.div`
  background: #FFFFFF;
  border: 1px solid #EBEBF0;
`


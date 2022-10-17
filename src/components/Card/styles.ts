import styled from "styled-components";
import { pxToRem } from "../../styles/utils/pxToRem";

import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const CardContainer = styled.div`
  padding: ${pxToRem(16)};
  width: 100%;
  border: 2px solid;
  border-color: transparent;
  outline: none;
  background: inherit;

  transition: all 0.4s;

  :hover {
    border-color: ${props => props.theme.colors.red.main}
  }
`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`

export const CardFooter = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: ${pxToRem(8)};

  p {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 500;
    font-size: ${pxToRem(12)};
    line-height: ${pxToRem(13)};
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.gray[400]};
  }

  h1, h2 {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 500;
    font-size: ${pxToRem(20)};
    line-height: ${pxToRem(22)};
  }

  h1 {
    color: ${props => props.theme.colors.gray[600]}
  }

  h2 {
    color: ${props => props.theme.colors.red.main}
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
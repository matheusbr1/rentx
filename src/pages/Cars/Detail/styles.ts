import styled from "styled-components";
import { pxToRem } from "../../../styles/utils/pxToRem";

import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const Container = styled.div`
    
`

export const CarDetailHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(64)};

  img:hover {
    transition: all 0.35s;
    opacity: 0.6;
  }

  div {
    display: grid;
    grid-template-columns: auto auto;
    gap: ${pxToRem(8)};

    p {
      font-family: 'Archivo';
      font-weight: 500;
      font-size: ${pxToRem(14)};
      line-height: ${pxToRem(15)};
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: ${props => props.theme.colors.gray[400]};
    }

    h1, h2 {
      font-family: 'Archivo';
      font-weight: 500;
      font-size: ${pxToRem(36)};
      line-height: ${pxToRem(39)};
    }

    h1 {
      color: ${props => props.theme.colors.gray[600]}
    }

    h2 {
      color: ${props => props.theme.colors.red.main}
    }
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

export const CarDetailContent = styled.div`
  display: flex;
  width: 100%;
  gap: ${pxToRem(32)};

  > div:first-child {
    flex: 2
  }

  > div:last-child {
    flex: 1
  }
`

export const CarDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${pxToRem(32)};
`

export const CarSpecCardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: ${pxToRem(8)};
  height: fit-content;
`
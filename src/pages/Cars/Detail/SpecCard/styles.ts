import styled from "styled-components";
import { pxToRem } from "../../../../styles/utils/pxToRem";

export const SpecCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${pxToRem(2)};

  border-bottom: solid 2px ${props => props.theme.colors.gray[100]};

  min-width: ${pxToRem(200)};
`

export const SpecCardImage = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  background: ${props => props.theme.colors.gray[50]};
  padding: ${pxToRem(14)};
`

export const SpecCardText = styled.div`
  flex: 1;
  width: max-content;

  display: flex;
  align-items: center;

  height: 100%;

  background: ${props => props.theme.colors.gray[50]};
  padding: ${pxToRem(16)};
  
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(22)};
    color: ${props => props.theme.colors.gray[500]};
  }
`
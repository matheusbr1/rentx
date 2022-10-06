import styled from "styled-components"
import { pxToRem } from "../../../styles/utils/pxToRem"

export const Content = styled.div`
  display: flex;
  width: 100%;
  gap: ${pxToRem(32)};
`

export const LeftSide = styled.div`
  flex: 1;
  
  display: flex;
  max-height: 80vh;
  
  img {
    margin: 0 auto;
    display: block;
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

export const RightSide = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};

  h1 {
    font-family: 'Archivo';
    font-weight: 600;
    font-size: ${pxToRem(36)};
    line-height: ${pxToRem(39)};
    color: ${props => props.theme.colors.gray[700]}
  }

  p {
    font-family: 'Inter';
    font-weight: 400;
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(26)};
    color: ${props => props.theme.colors.gray[500]}
  }
`
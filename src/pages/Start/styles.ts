import styled from "styled-components";

import { pxToRem } from '../../styles/utils/pxToRem'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.colors.gray[800]};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-height: 600px) {
    height: 100%;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  padding: ${pxToRem(48)} ${pxToRem(64)};

  width: 100%;
  max-width: 1440px;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: ${props => props.theme.colors.white.main};
`

export const LeftSide = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    img {
      margin-bottom: ${pxToRem(128)};
    }

    h1 {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 600;
      font-size: ${pxToRem(54)};
      line-height: ${pxToRem(54)};

      margin-bottom: ${pxToRem(32)};
    }

    h2 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: ${pxToRem(20)};
      line-height: ${pxToRem(30)};

      margin-bottom: ${pxToRem(64)};
    }
  }
`

export const RightSide = styled.div`
  flex: 1;

  display: flex;
  max-height: 100%;
 
  img {
    margin: 0 auto;
    display: block;
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`
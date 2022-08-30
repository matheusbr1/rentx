import styled from "styled-components";

import { pxToRem } from '../../styles/utils/pxToRem'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.colors.gray[700]};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-height: 600px) {
    height: 100%;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  padding: ${pxToRem(48)};

  width: 100%;
  height: 100%;

  max-width: 1440px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: ${props => props.theme.colors.white.main};
`

export const LeftSide = styled.div`
  margin-right: ${pxToRem(32)};

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

  button {
    width:  ${pxToRem(292)};
    height: ${pxToRem(80)};
    background: ${props => props.theme.colors.red.main};
    color: ${props => props.theme.colors.white.main};
    font-style: normal;
    font-weight: 500;
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(22)};
    border: none;
  }

  @media (max-width: 1024px) {
    margin-right: unset;
  }
`

export const RightSide = styled.div`
  flex: 1;

  display: flex;
  max-height: 100%;
 
  img {
    margin: 0 auto;
    display: block;
  }
  
  @media (max-width: 1240px) {
    img {
      max-width: 98%;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`
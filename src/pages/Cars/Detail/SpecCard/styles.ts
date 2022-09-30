import styled from "styled-components";
import { pxToRem } from "../../../../styles/utils/pxToRem";

export const SpecCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${pxToRem(2)};

  border-bottom: solid 2px #EBEBF0;
  border-color: 

  min-width: ${pxToRem(200)};
`

export const SpecCardImage = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  background: #F4F5F6;
  padding: ${pxToRem(14)};
`

export const SpecCardText = styled.div`
  flex: 1;
  width: max-content;

  display: flex;
  align-items: center;

  height: 100%;

  background: #F4F5F6;
  padding: ${pxToRem(16)};
  
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #7A7A80;
  }
`
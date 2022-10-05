import styled from "styled-components"
import { pxToRem } from "../../../styles/utils/pxToRem"

export const SignInContent = styled.div`
  display: flex;
  width: 100%;
  gap: ${pxToRem(32)};

  > div:first-child {
    flex: 2;
    
    display: flex;
    max-height: 80vh;
    
    @media (max-width: 1200px) {
      display: none;
    }
  }

  > div:last-child {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

export const SignInFormWrapper = styled.div`
  form  {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(16)}
  }

  h1 {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 39px;
    color: #41414D;
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #7A7A80;
  }
`
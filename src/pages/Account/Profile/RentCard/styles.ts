import { darken } from "polished"
import styled from "styled-components"
import { pxToRem } from "../../../../styles/utils/pxToRem"

export const RentCard = styled.div`
  width: 100%;
  outline: none;
  
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
`

export const RentCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${pxToRem(16)};
  background: ${props => props.theme.colors.white.main};
`

export const RentCardCarInfos = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: ${pxToRem(8)} ${pxToRem(32)};

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
    font-size: ${pxToRem(24)};
    line-height: ${pxToRem(26)};
  }

  h1 {
    color: ${props => props.theme.colors.gray[600]};
    margin-bottom: 10px;
  }

  h2 {
    color: ${props => props.theme.colors.red.main}
  }
`

export const RentCardImage = styled.div`
  display: flex;
  align-items: center;
  
  img {
    min-height: ${pxToRem(150)};
  }
`

export const RentCardFooter = styled.div`
  padding: ${pxToRem(16)};
  min-height: ${pxToRem(60)};
  background: ${props => props.theme.colors.white.main};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(16)};

  > p {
    font-family: 'Archivo';
    font-weight: 500;
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(15)};
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.gray[400]};
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    gap: ${pxToRem(12)};

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: ${pxToRem(16)};
      line-height: ${pxToRem(20)};
      color: ${props => props.theme.colors.gray[600]};
    }
  }
`

export const RentCardRentInProgress = styled.div`
  min-height: ${pxToRem(60)};
  padding: ${pxToRem(16)};
  background: ${props => props.theme.colors.white.main};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(16)};

  > p {
    font-family: 'Archivo';
    font-weight: 500;
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(15)};
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.gray[400]};
  }

  button {
    padding: ${pxToRem(4)} ${pxToRem(20)};

    background: ${props => props.theme.colors.green.main};
    color: ${props => props.theme.colors.white.main};

    border: 1px solid;
    border-color: ${props => props.theme.colors.gray[300]};
    
    font-style: normal;
    font-weight: 500;
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(20)};

    transition: all 0.4s;

    &:hover { 
      border-color: ${props => props.theme.colors.gray[800]};
      background: ${props => darken(0.15, props.theme.colors.green.main)}
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.gray[800]};
    }
  }
`
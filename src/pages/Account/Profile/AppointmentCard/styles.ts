import styled from "styled-components"
import { pxToRem } from "../../../../styles/utils/pxToRem"

export const AppointmentCard = styled.div`
  width: 100%;
  outline: none;
  
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
`

export const AppointmentCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${pxToRem(16)};
  background: ${props => props.theme.colors.white.main};
`

export const AppointmentCardCarInfos = styled.div`
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

export const AppointmentCardImage = styled.div`
  display: flex;
  align-items: center;
  
  img {
    min-height: ${pxToRem(150)};
  }
`

export const AppointmentCardFooter = styled.div`
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
      color: ${props => props.theme.colors.gray[600]
    }
  }
`
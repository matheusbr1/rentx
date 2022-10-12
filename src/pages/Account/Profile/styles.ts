import styled from "styled-components"
import { pxToRem } from "../../../styles/utils/pxToRem"

import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: ${pxToRem(48)};

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: ${pxToRem(16)};
    margin: ${pxToRem(16)} 0;
  }
`

export const LeftSide = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RightSide = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProfileEdition = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(16)};
`

export const ProfileAppointments = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};

  h1 {
    margin-bottom: ${pxToRem(16)};
  }
`

export const AppointmentsList = styled.div`
  overflow: scroll;
  max-height: 70vh;
  
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(32)};

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Separator = styled(SeparatorPrimitive.Separator)`
  width: 2px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.gray[300]};
  transform: rotate(180deg);
`
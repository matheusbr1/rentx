import styled from "styled-components";
import { pxToRem } from "../../styles/utils/pxToRem";
import { logoSize } from "../SideMenu/styles";

export const Container = styled.div`
  background: ${props => props.theme.colors.gray[100]};
  margin-left: ${logoSize};
  min-height: 100vh;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.main`
  max-width: ${pxToRem(1128)};
  width: 100%;
  padding: ${pxToRem(16)};
`
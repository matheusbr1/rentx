import styled from "styled-components";
import { pxToRem } from "../../styles/utils/pxToRem";
import { logoSize } from "../SideMenu/styles";

interface Props {
  hasAppBar: boolean
}

export const Container = styled.div<Props>`
  background: ${props => props.hasAppBar 
    ? props.theme.colors.gray[100] 
    : 'transparent'
  };
  
  min-height: 100vh;
  height: 100%;

  margin-left: ${logoSize};

  display: flex;
  justify-content: center;
`

export const Content = styled.main<Props>`
  max-width: ${pxToRem(1128)};
  width: 100%;
  padding: ${pxToRem(16)};

  margin-top: ${props => props.hasAppBar ? logoSize : 0};
`
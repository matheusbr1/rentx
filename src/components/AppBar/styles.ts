import styled from "styled-components";
import { pxToRem } from "../../styles/utils/pxToRem";
import { logoSize } from "../SideMenu/styles";

export const AppBarContainer = styled.div`
  background: ${props => props.theme.colors.white.main};
  height: ${logoSize};

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  left: ${logoSize};

  z-index: 999;
`

export const AppBarContent = styled.div`
  max-width: ${pxToRem(1128)};
  width: 100%;
  padding: ${pxToRem(16)};

  display: flex;
  align-items: center;
  justify-content: space-between;

  color:  ${props => props.theme.colors.gray[600]};
`

export const AppBarTitle = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: ${pxToRem(20)};
  line-height: ${pxToRem(25)};
`

export const AppBarUserSession = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(16)};

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(26)}
  }
`

export const AppBarUserAvatar = styled.div`
  background: ${props => props.theme.colors.gray[100]};
  padding: ${pxToRem(16)};
  border-radius: 50%;

  img {
    width: ${pxToRem(22)};
    height: ${pxToRem(22)};
  }
`

export const AppBarLogoutButton = styled.button `
  background: transparent;
  border: none;
  
  img:hover {
    transition: all 0.4s;
    opacity: 0.6;
  }
`
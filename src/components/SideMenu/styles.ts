import styled from "styled-components";
import { pxToRem } from "../../styles/utils/pxToRem";

const logoSize = pxToRem(80)
const sideMenuItensHeight = `calc(99% - ${logoSize})`

interface SideMenuItemProps {
  isActive: boolean
}

export const SideMenuContainer = styled.div`
  background: ${props => props.theme.colors.gray[700]};
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;

  img {
    width: ${logoSize}
  }
`

export const SideMenuItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${sideMenuItensHeight};
`

export const SideMenuItem = styled.div<SideMenuItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${pxToRem(16)};

  position: relative;

  background: ${(props) => props.isActive ? props.theme.colors.black.main: 'transparent '};

  @keyframes activeItem {
    from { height: 0%; }
    to { height: 100%; }
  }

  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    background: ${(props) => props.isActive ? props.theme.colors.red.main : 'transparent '};
    width: ${pxToRem(3)};
    display: block;
    
    animation-name: activeItem;
    animation-duration: 0.35s;
  }

  img {
    width: 100%
  }
`
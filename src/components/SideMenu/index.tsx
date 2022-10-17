import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

const menuItems = [
  { imageName: 'Carros', link: '/cars/list', activeInPath: '/cars' },
  { imageName: 'Perfil', link: '/account/signIn', activeInPath: '/account' },
]

export interface SideMenuProps {
  pathname: string
}

const SideMenu: React.FC<SideMenuProps> = ({ pathname }) => (
  <S.SideMenuContainer>
    <img src="/assets/LogoMenor.svg" alt="Logotipo menor da Rentx (um X)" />

    <S.SideMenuItens>
      {menuItems.map(item => (
        <S.SideMenuItem isActive={pathname?.includes(item.activeInPath)} >
          <Link to={item.link} >
            <img src={`/assets/${item.imageName}.svg`} alt={item.imageName} />
          </Link>
        </S.SideMenuItem>
      ))}
    </S.SideMenuItens>
  </S.SideMenuContainer>
)

export { SideMenu };
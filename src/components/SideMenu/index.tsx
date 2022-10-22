import React from 'react';
import { Link } from 'react-router-dom';
import { iconsAsComps } from '../../assets/asComponents';

import * as S from './styles';

const menuItems = [
  { imageName: 'Carros', link: '/cars/list', activeInPath: '/cars', icon: 'car' },
  { imageName: 'Perfil', link: '/account/profile', activeInPath: '/account', icon: 'profile' },
]

type Icon = 'profile' | 'car'
export interface SideMenuProps {
  pathname: string
}

const SideMenu: React.FC<SideMenuProps> = ({ pathname }) => (
  <S.SideMenuContainer>
    <img src="/assets/LogoMenor.svg" alt="Logotipo menor da Rentx (um X)" />

    <S.SideMenuItens>
      {menuItems.map(item => {
        const Icon = iconsAsComps[item.icon as Icon]

        return (
          <S.SideMenuItem 
            key={item.link} 
            isActive={pathname?.includes(item.activeInPath)} 
          >
            <Link to={item.link} >
              <Icon />
            </Link>
          </S.SideMenuItem>
        )
      })}
    </S.SideMenuItens>
  </S.SideMenuContainer>
)

export { SideMenu };
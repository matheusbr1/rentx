import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as S from './styles';

const menuItems = [
  { imageName: 'Home', link: '/cars/list' },
  { imageName: 'Carros', link: '/cars/filter' },
  { imageName: 'Perfil', link: '/account/profile' },
]

const SideMenu: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <S.SideMenuContainer>
      <img src="/assets/LogoMenor.svg" alt="Logotipo menor da Rentx (um X)" />
  
      <S.SideMenuItens>
        {menuItems.map(item => (
          <S.SideMenuItem isActive={pathname === item.link} >
            <Link to={item.link} >
              <img src={`/assets/${item.imageName}.svg`} alt={item.imageName} />
            </Link>
          </S.SideMenuItem>
        ))}
      </S.SideMenuItens>
    </S.SideMenuContainer>
  )
} 

export { SideMenu };
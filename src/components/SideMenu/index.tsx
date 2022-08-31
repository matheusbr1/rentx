import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

const menuItems = [
  { imageName: 'Home', link: '' },
  { imageName: 'Carros', link: '' },
  { imageName: 'Perfil', link: '' },
]

const SideMenu: React.FC = () => (
  <S.SideMenuContainer>
    <img src="/assets/LogoMenor.svg" alt="Logotipo menor da Rentx (um X)" />

    <S.SideMenuItens>
      {menuItems.map((item, idx) => (
        <S.SideMenuItem isActive={idx === 1} >
          <Link to={item.link} >
            <img src={`/assets/${item.imageName}.svg`} alt={item.imageName} />
          </Link>
        </S.SideMenuItem>
      ))}
    </S.SideMenuItens>
  </S.SideMenuContainer>
)

export { SideMenu };
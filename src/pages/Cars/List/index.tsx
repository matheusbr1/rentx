import React from 'react';
import { AppBar } from '../../../components/AppBar';
import { SideMenu } from '../../../components/SideMenu';
import * as S from './styles';

const CarsList: React.FC = () => {
  return (
    <S.Container>
      <SideMenu />
      <AppBar title='Início' />      

      <S.Content>
        Conteúdo
      </S.Content>
    </S.Container>
  )
}

export { CarsList };
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';

import * as S from './styles';

const Start: React.FC = () => {
  const navigation = useHistory()

  return (
    <S.Container>
      <S.Content>
        <S.LeftSide>
          <S.LeftSideContentWrapper>
            <img src='./assets/Logotipo.svg' />
            
            <h1>
              Alugue um <br/>
              carro de maneira <br/>
              simples e fácil <br/>
            </h1>

            <h2>
              Vários modelos para você dirigir <br/>
              seguro, com conforto e segurança.
            </h2>

            <Button onClick={() => navigation.push('/cars/list')} >
              Começar agora
            </Button>
          </S.LeftSideContentWrapper>
        </S.LeftSide>

        <S.RightSide>
          <img src='./assets/AudiPaginaInicial.svg' />  
        </S.RightSide>
      </S.Content>
    </S.Container>
  )
}

export { Start }
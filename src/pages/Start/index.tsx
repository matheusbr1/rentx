import React from 'react';
import { Button } from '../../components/Button';

import * as S from './styles';

const Start: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.LeftSide>
          <div>
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

            <Button>
              Começar agora
            </Button>
          </div>
        </S.LeftSide>

        <S.RightSide>
          <img src='./assets/AudiPaginaInicial.svg' />  
        </S.RightSide>
      </S.Content>
    </S.Container>
  )
}

export { Start }
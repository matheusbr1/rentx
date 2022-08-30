import React from 'react';

import { Container, Content, LeftSide, RightSide } from './styles';

const Start: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftSide>
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

          <button>
            Começar agora
          </button>
        </LeftSide>

        <RightSide>
          <img src='./assets/AudiPaginaInicial.svg' />  
        </RightSide>
      </Content>
    </Container>
  )
}

export default Start;
import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles'

const RentedCar: React.FC = () => {
  const history = useHistory()

  return (
    <S.Container>
      <S.Content>
        <img src='/assets/rentedCheck.svg' />

        <h1>Carro Alugado</h1>
        
        <p>
          Agora você só precisa ir até a concessionária
          da RentX pegar o seu automóvel.
        </p>

        <S.ConfirmationButton onClick={() => history.push('/cars/list')} >
          Ok
        </S.ConfirmationButton>
      </S.Content>
    </S.Container>
  )
}

export { RentedCar }
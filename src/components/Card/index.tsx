import React from 'react';

import * as S from './styles';

interface CardProps {
  brand: string
  model: string
  price: number
}

const Card: React.FC<CardProps> = ({ brand, model, price }) => {
  return (
    <S.CardContainer>
      <S.CardContent>
        <img src="/assets/Audi.svg" alt="Audi" />
      </S.CardContent>

      <S.Separator />
      
      <S.CardFooter>
        <p>{brand}</p>
        <p>AO DIA</p>
        <h1>{model}</h1>
        <h2>R$ {price}</h2>
      </S.CardFooter>
    </S.CardContainer>
  )
}

export default Card;
import React from 'react';

import * as S from './styles';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  brand: string
  model: string
  daily_rate: string
  image_URL: string
}

const Card: React.FC<CardProps> = ({ brand, model, daily_rate, image_URL, ...rest }) => {
  function formatCurrency (value: string) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL', 
      minimumFractionDigits: 0
    }).format(Number(value))
  }

  return (
    <S.CardContainer {...rest} >
      <S.CardContent>
        <img src={image_URL} alt={model} />
      </S.CardContent>

      <S.Separator />
        
      <S.CardFooter>
        <p>{brand}</p>
        <p>AO DIA</p>
        <h1>{model}</h1>
        <h2>{formatCurrency(daily_rate)}</h2>
      </S.CardFooter>
    </S.CardContainer>
  )
}

export { Card }
import React from 'react';
import { Rent } from '..';
import { formatCurrency, formatDate } from '../../../../utils/formatters';

import * as S from './styles';

export interface RentCardProps {
  rent: Rent
  onDevolution: (rentId: string) => void
}

export const RentCard: React.FC<RentCardProps> = ({ rent, onDevolution }) => (
  <S.RentCard>
    <S.RentCardContent>
      <S.RentCardCarInfos>
        <p>{rent.car.brand}</p>
        <h1>{rent.car.name}</h1>
        
        <p>AO DIA</p>
        <h2> {formatCurrency(rent.car.daily_rate)} </h2>
      </S.RentCardCarInfos>

      <S.RentCardImage>
        <img src={rent.car.images[0]?.image_URL} alt={rent.car.brand} />
      </S.RentCardImage>
    </S.RentCardContent>

    <S.RentCardFooter>
      <p>Período de aluguél</p>

      <div>
        <p> {formatDate(rent.start_date)} </p>

        <img src="/assets/arrow.svg" alt="Flecha apontando para direita" />

        <p> {formatDate(rent.end_date || rent.expected_return_date)} </p>
      </div>
    </S.RentCardFooter>

    {!rent.total && (
      <S.RentCardRentInProgress>
        <p>Aluguél em andamento</p>

        <button onClick={() => onDevolution(rent.id)} > Devolver </button>
      </S.RentCardRentInProgress>
    )}
  </S.RentCard>
)

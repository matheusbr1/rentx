import React from 'react';
import { Appointment } from '..';

import * as S from './styles';

export interface AppointmentCardProps {
  appointment: Appointment
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  return (
    <S.AppointmentCard>
      <S.AppointmentCardContent>
        <S.AppointmentCardCarInfos>
          <p>{appointment.car.brand}</p>
          <h1>{appointment.car.name}</h1>
          
          <p>AO DIA</p>
          <h2>{appointment.car.daily_rate}</h2>
        </S.AppointmentCardCarInfos>

        <S.AppointmentCardImage>
          <img src="/assets/Audi.svg" alt="Audi" />
        </S.AppointmentCardImage>
      </S.AppointmentCardContent>

      <S.AppointmentCardFooter>
        <p>Período de aluguél</p>

        <div>
          <p> {new Date(appointment.start_date).toDateString()} </p>

          <img src="/assets/arrow.svg" alt="Flecha apontando para direita" />

          <p> {new Date(appointment.end_date).toDateString()} </p>
        </div>
      </S.AppointmentCardFooter>
    </S.AppointmentCard>
  )
}


import React from "react";

import * as S from './styles'

interface InfoProps {
  title: string
  value: string
}

const Info: React.FC<InfoProps> = ({ title, value }) => (
  <S.Info>
    <h1 className="title">{title}</h1>
    <p className="value">{value}</p>
  </S.Info>
)

const Tabs: React.FC = () => {
  return (
    <S.Tabs defaultValue="period" >
      <S.List>
        <S.Trigger value="description" >SOBRE O CARRO</S.Trigger>
        <S.Trigger value="period" >PERÍODO</S.Trigger>
      </S.List>

      <S.Content value="description" >
        <p className="car_description" >
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </p>
      </S.Content>

      <S.Content value="period" >
        <div className="period_data_row" >
          <Info title="De" value='18 Jul 2021' />
          <Info title="Até" value='20 Jul 2021' />

          <S.CalendarButton>
            <img src="/assets/calendar.svg" alt="Calendário" />
          </S.CalendarButton>
        </div>
        
        <S.Separator />

        <div className="period_data_row" >
          <Info title="Total" value='R$ 580 x3 diárias' />

          <p className="total_amount" >R$ 2,900</p>
        </div>
      </S.Content>
    </S.Tabs>
  )
}

export { Tabs }
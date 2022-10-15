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

interface TabsProps {
  onOpenCalendar: () => void
}

const Tabs: React.FC<TabsProps> = ({ onOpenCalendar }) => {
  return (
    <S.Tabs defaultValue="tab-1" >
      <S.List>
        <S.Trigger value="tab-1" >SOBRE O CARRO</S.Trigger>
        <S.Trigger value="tab-2" >PERÍODO</S.Trigger>
      </S.List>

      <S.Content value="tab-1" >
        <p className="car_description" >
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </p>
      </S.Content>

      <S.Content value="tab-2" >
        <S.PeriodDataRow>
          <Info title="De" value='18 Jul 2021' />
          <Info title="Até" value='20 Jul 2021' />

          <S.CalendarButton onClick={onOpenCalendar} >
            <img src="/assets/calendar.svg" alt="Calendário" />
          </S.CalendarButton>
        </S.PeriodDataRow>
        
        <S.Separator />

        <S.PeriodDataRow>
          <Info title="Total" value='R$ 580 x3 diárias' />

          <p className="total_amount" >R$ 2,900</p>
        </S.PeriodDataRow>
      </S.Content>
    </S.Tabs>
  )
}

export { Tabs }
import React, { useMemo, useState } from "react";
import { formatCurrency, formatDate } from "../../../../utils/formatters";

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
  carDescription: string
}

interface RentalPeriodProps {
  onOpenCalendar: () => void
}

const RentalPeriod: React.FC<RentalPeriodProps> = ({ onOpenCalendar }) => {
  const initialDate = null
  const finalDate = null

  const [total, setTotal] = useState('0')
  const [dailyRate] = useState('500')
  const [dailyAmount] = useState('0')

  const totalDescription = useMemo(() => {
    return `${formatCurrency(dailyRate)} x diárias`
  }, [dailyAmount])

  return (
    <>
      <S.PeriodDataRow>
        <Info title="De" value={formatDate(initialDate) || 'Selecione a data'} />
        <Info title="Até" value={formatDate(finalDate) || 'Selecione a data'} />

        <S.CalendarButton onClick={onOpenCalendar} >
          <img src="/assets/calendar.svg" alt="Calendário" />
        </S.CalendarButton>
      </S.PeriodDataRow>
      
      <S.Separator />

      <S.PeriodDataRow>
        <Info title="Total" value={totalDescription} />
        <p className="total_amount" >{formatCurrency(total)}</p>
      </S.PeriodDataRow>
    </>
  )
}

const Tabs: React.FC<TabsProps> = ({ onOpenCalendar, carDescription }) => {
  return (
    <S.Tabs defaultValue="tab-1" >
      <S.List>
        <S.Trigger value="tab-1" >SOBRE O CARRO</S.Trigger>
        <S.Trigger value="tab-2" >PERÍODO</S.Trigger>
      </S.List>

      <S.Content value="tab-1" >
        <p className="car_description" > {carDescription} </p>
      </S.Content>

      <S.Content value="tab-2" >
        <RentalPeriod onOpenCalendar={onOpenCalendar} />
      </S.Content>
    </S.Tabs>
  )
}

export { Tabs }
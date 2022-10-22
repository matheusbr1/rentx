import React, { useMemo, useState } from "react";
import { useRent } from "../../../../hooks/contexts/useRent";
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
}

interface RentalPeriodProps {
  onOpenCalendar: () => void
}

type Rent = {
  initialDate: Date | null
  finalDate: Date | null
  dailyAmount: number
  total: number
}

const RentalPeriod: React.FC<RentalPeriodProps> = ({ onOpenCalendar }) => {
  const { isPeriodSelected, period, selectedCar } = useRent()

  const rent: Rent = useMemo(() => {
    let rent: Rent = {
      initialDate: isPeriodSelected ? period[0] : null,
      finalDate: isPeriodSelected ? period[1] : null,
      dailyAmount: 0,
      total: 0
    }

    if (!!rent.initialDate && !!rent.finalDate) {
      var Difference_In_Time = period[1].getTime() - period[0].getTime()
      var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24))
      rent.dailyAmount = Difference_In_Days
      rent.total = Difference_In_Days * Number(selectedCar?.daily_rate)
    }

    return rent
  }, [period, selectedCar, isPeriodSelected])
  
  const totalDescription = useMemo(() => {
    return `${formatCurrency(selectedCar?.daily_rate)} x ${rent.dailyAmount} diárias`
  }, [rent])

  return (
    <>
      <S.PeriodDataRow>
        <Info title="De" value={formatDate(rent.initialDate) || 'Selecione a data'} />
        <Info title="Até" value={formatDate(rent.finalDate) || 'Selecione a data'} />

        <S.CalendarButton onClick={onOpenCalendar} >
          <img src="/assets/calendar.svg" alt="Calendário" />
        </S.CalendarButton>
      </S.PeriodDataRow>
      
      <S.Separator />

      <S.PeriodDataRow>
        <Info title="Total" value={totalDescription} />
        <p className="total_amount" >{formatCurrency(String(rent.total))}</p>
      </S.PeriodDataRow>
    </>
  )
}

const Tabs: React.FC<TabsProps> = ({ onOpenCalendar }) => {
  const { selectedCar } = useRent()

  return (
    <S.Tabs defaultValue="tab-1" >
      <S.List>
        <S.Trigger value="tab-1" >SOBRE O CARRO</S.Trigger>
        <S.Trigger value="tab-2" >PERÍODO</S.Trigger>
      </S.List>

      <S.Content value="tab-1" >
        <p className="car_description" > {selectedCar?.description || ''} </p>
      </S.Content>

      <S.Content value="tab-2" >
        <RentalPeriod onOpenCalendar={onOpenCalendar} />
      </S.Content>
    </S.Tabs>
  )
}

export { Tabs }
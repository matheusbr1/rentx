import React from 'react';
import PrimitiveCalendar from 'react-calendar'
import { useRent } from '../../../../../hooks/contexts/useRent';

import * as S from './styles'

const Calendar: React.FC = () => {
  const { period, setPeriod } = useRent()

  return (
    <S.CalendarWrapper>
      <PrimitiveCalendar 
        onChange={setPeriod} 
        value={period as  any} 
        selectRange={true}
        locale='pr-BR' 
        allowPartialRange={false}
        prev2Label={null}
        next2Label={null}
        minDetail='month'
      />
    </S.CalendarWrapper>
  )
}

export { Calendar };
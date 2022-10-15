import React from 'react';
import PrimitiveCalendar from 'react-calendar'

import * as S from './styles'

interface CalendarProps {
  date: Date
  setDate: (dateRange: Date) => void
}

const Calendar: React.FC<CalendarProps> = ({ date, setDate }) => {
  return (
    <S.CalendarWrapper>
      <PrimitiveCalendar 
        onChange={setDate} 
        value={date} 
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
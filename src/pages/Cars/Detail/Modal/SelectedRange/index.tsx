import React from 'react';
import * as S from './styles'
import { Button } from '../../../../../components/Button';
import { formatDate } from '../../../../../utils/formatters';
import { useRent } from '../../../../../hooks/contexts/useRent';

interface InfoProps {
  title: string
  value: string
}

export const Info: React.FC<InfoProps> = ({ title, value }) => (
  <S.Info>
    <h1 className="title">{title}</h1>
    <p className="value">{value}</p>
  </S.Info>
)

interface SelectedRangeProps {
  onConfirm: () => void
}

const SelectedRange: React.FC<SelectedRangeProps> = ({ onConfirm }) => {
  const { period, isPeriodSelected } = useRent()

  return (
    <S.SelectedRangeDateWrapper>
      {isPeriodSelected ? (
        <div>
          <Info title='De' value={formatDate(period[0]) || 'Selecione a data'} />
          <Info title='Até' value={formatDate(period[1]) || 'Selecione a data'}/>
        </div>
      ) : (
        <div>
          <Info title='De' value='Selecione a data' />
          <Info title='Até' value='Selecione a data' />
        </div>
      )}
  
      <Button 
        width='full' 
        onClick={onConfirm}
        disabled={!isPeriodSelected}
      >
        Confirmar
      </Button>
    </S.SelectedRangeDateWrapper>
  )
}

export { SelectedRange }
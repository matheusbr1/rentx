import React from 'react';
import * as S from './styles'
import { Button } from '../../../../../components/Button';
import { formatDate } from '../../../../../utils/formatters';

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
  date: Date[]
  onConfirm: () => void
}

const SelectedRange: React.FC<SelectedRangeProps> = ({ date, onConfirm }) => (
  <S.SelectedRangeDateWrapper>
    {date.length > 0 ? (
      <div>
        <Info title='De' value={formatDate(date[0]) || 'Selecione a data'} />
        <Info title='Até' value={formatDate(date[1]) || 'Selecione a data'}/>
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
      disabled={!(date.length > 0)}
    >
      Confirmar
    </Button>
  </S.SelectedRangeDateWrapper>
)

export { SelectedRange }
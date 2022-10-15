import React, { useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import * as S from './styles'
import { Calendar } from './Calendar';
import { SelectedRange } from './SelectedRange';

export interface ModalProps extends DialogPrimitive.DialogProps {
  onConfirm: (range: Date[]) => void
  setIsOpen: (isOpen: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ setIsOpen, onConfirm, ...rest }) => {
  const [date, setDate] = useState<any>(new Date());

  console.log(date)

  return (
    <S.Root {...rest} >
      <DialogPrimitive.Portal>
        <S.Overlay className='dialog-overlay' />
        
        <S.Content className='dialog-content' >
          <S.Title>
            Escolha uma data de início e fim do aluguel

            <button onClick={() => setIsOpen(false)} >X</button>
          </S.Title>

          <div>
            <Calendar 
              date={date} 
              setDate={setDate} 
            />
            
            <SelectedRange 
              date={date} 
              onConfirm={() => {
                onConfirm(date)
                setIsOpen(false)
              }} 
            />
          </div>
        
          <DialogPrimitive.Close style={{ display: 'contents' }} />
        </S.Content>
      </DialogPrimitive.Portal>
    </S.Root>
  )
}

export { Modal };

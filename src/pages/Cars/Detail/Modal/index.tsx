import React, { useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import * as S from './styles'
import { Calendar } from './Calendar';
import { SelectedRange } from './SelectedRange';
import { useRent } from '../../../../hooks/contexts/useRent';

export interface ModalProps extends DialogPrimitive.DialogProps {
  setIsOpen: (isOpen: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ setIsOpen, ...rest }) => (
  <S.Root {...rest} >
    <DialogPrimitive.Portal>
      <S.Overlay className='dialog-overlay' />
      
      <S.Content className='dialog-content' >
        <S.Title>
          Escolha uma data de início e fim do aluguel

          <button onClick={() => setIsOpen(false)} >X</button>
        </S.Title>

        <div>
          <Calendar />
          <SelectedRange onConfirm={() => setIsOpen(false)} />
        </div>
      
        <DialogPrimitive.Close style={{ display: 'contents' }} />
      </S.Content>
    </DialogPrimitive.Portal>
  </S.Root>
)

export { Modal };

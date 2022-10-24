import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import * as S from './styles'

export interface ModalProps extends DialogPrimitive.DialogProps {
  setIsOpen: (isOpen: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ setIsOpen, ...rest }) => (
  <S.Root {...rest} >
    <DialogPrimitive.Portal>
      <S.Overlay className='dialog-overlay' />
      
      <S.Content className='dialog-content' >
        <img src='/assets/rentedCheck.svg' />

        <div>
          <h1> Conta criada! </h1>
          <p> Agora você parte da RentX. <br /> Seja bem-vindo(a).</p>
        </div>
        
        <S.ConfirmationButton onClick={() => setIsOpen(false)} >
          Ok
        </S.ConfirmationButton>
      
        <DialogPrimitive.Close style={{ display: 'contents' }} />
      </S.Content>
    </DialogPrimitive.Portal>
  </S.Root>
)

export { Modal };

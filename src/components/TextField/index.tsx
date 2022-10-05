import React, { InputHTMLAttributes, useState } from 'react';

import * as S from './styles'

type InputAttributes = InputHTMLAttributes<HTMLInputElement>

type Icon = 'email' | 'password'

interface TextFieldProps extends InputAttributes {
  icon?: Icon
  helperText?: string
  isErrored?: boolean
}

const TextField: React.FC<TextFieldProps> = ({ icon, helperText, isErrored, ...props }) => {
  const [type, setType] = useState(props.type)

  return (
    <>
      <S.FieldWrapper isErrored={isErrored} >
        {icon && (
          <S.FieldStartIconBox>
            <img src={`/assets/icons/${icon}.svg`} />
          </S.FieldStartIconBox>
        )}
        
        <S.Field {...props} type={type} />

        {props.type === 'password' && (
          <S.FieldEndIconBox>
            <button 
              onClick={() => setType(type === 'password'  ? 'text' : 'password')} 
            >
              <img src='/assets/icons/passwordVisibility.svg' />
            </button>
          </S.FieldEndIconBox>
        )}
      </S.FieldWrapper>

      {helperText && (
        <S.FieldHelperText isErrored={isErrored} >
          {helperText}
        </S.FieldHelperText>
      )}
    </>
  )
}

export { TextField } 
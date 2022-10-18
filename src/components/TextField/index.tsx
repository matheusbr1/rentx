import React, { InputHTMLAttributes, useState } from 'react';
import { iconsAsComps } from '../../assets/asComponents'

import * as S from './styles'

type InputAttributes = InputHTMLAttributes<HTMLInputElement>

type Icon = 'email' | 'password' | 'profile' | 'car'

export interface TextFieldProps extends InputAttributes {
  icon?: Icon
  helperText?: string
  isErrored?: boolean
}

const TextField: React.FC<TextFieldProps> = ({ icon, helperText, isErrored, ...props }) => {
  const [type, setType] = useState(props.type)

  const CurrentIcon = iconsAsComps[icon as Icon]

  return (
    <>
      <S.FieldWrapper isErrored={isErrored} >
        {icon && (
          <S.FieldStartIconBox>
            <CurrentIcon /> 
            {/* <img src={`/assets/${icon}.svg`} /> */}
          </S.FieldStartIconBox>
        )}
        
        <S.Field {...props} type={type} tabIndex={1} />

        {props.type === 'password' && (
          <S.FieldEndIconBox>
            <button
              onClick={() => setType(type === 'password'  ? 'text' : 'password')} 
            >
              <img src='/assets/passwordVisibility.svg' />
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
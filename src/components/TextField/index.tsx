import React, { InputHTMLAttributes, useState, forwardRef } from 'react';
import { iconsAsComps } from '../../assets/asComponents'

import * as S from './styles'

type InputAttributes = InputHTMLAttributes<HTMLInputElement>

type Icon = 'email' | 'password' | 'profile' | 'car'

export interface TextFieldProps extends InputAttributes {
  icon?: Icon
  helperText?: string
  isErrored?: boolean
}

const Field: React.ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = 
  ({ icon, helperText, isErrored, ...props }, ref) => {
  const [type, setType] = useState(props.type)

  const CurrentIcon = iconsAsComps[icon as Icon]

  return (
    <div>
      <S.FieldWrapper isErrored={isErrored} >
        {icon && (
          <S.FieldStartIconBox>
            <CurrentIcon /> 
          </S.FieldStartIconBox>
        )}
        
        <S.Field
          ref={ref}
          type={type} 
          tabIndex={1} 
          {...props} 
        />

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
    </div>
  )
}

const TextField = forwardRef(Field)

export { TextField }
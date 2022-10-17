import React, { InputHTMLAttributes, useState } from 'react';
import { EmailIcon } from '.././../../public/assets/icons/asComponents/EmailIcon'
import { PasswordIcon } from '.././../../public/assets/icons/asComponents/PasswordIcon'

import * as S from './styles'

type InputAttributes = InputHTMLAttributes<HTMLInputElement>

type Icon = 'email' | 'password'

interface Icons {
  [key: string]: any
}

const icons: Icons = {
  'email': EmailIcon,
  'password': PasswordIcon,
}

export interface TextFieldProps extends InputAttributes {
  icon?: Icon
  helperText?: string
  isErrored?: boolean
}

const TextField: React.FC<TextFieldProps> = ({ icon: Icon, helperText, isErrored, ...props }) => {
  const [type, setType] = useState(props.type)

  const CurrentIcon = icons[Icon as string]

  return (
    <>
      <S.FieldWrapper isErrored={isErrored} >
        {Icon && (
          <S.FieldStartIconBox>
            <CurrentIcon /> 
            {/* <img src={`/assets/icons/${icon}.svg`} /> */}
          </S.FieldStartIconBox>
        )}
        
        <S.Field {...props} type={type} tabIndex={1} />

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
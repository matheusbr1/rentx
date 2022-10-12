import React from 'react'

import * as S from './styles'

export interface AvatarProps {
  imageSource: string
  name: string
}

const Avatar: React.FC<AvatarProps> = ({ imageSource, name }) =>  (
  <S.Avatar> 
    <S.Image
      src={imageSource}
      alt={name}
    />

    <S.Fallback delayMs={600}>
      {name}
    </S.Fallback>
  </S.Avatar>
)

export { Avatar }
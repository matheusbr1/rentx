import React from 'react'

import * as S from './styles'

export interface AvatarProps {
  imageSource: string | undefined
  name: string | undefined
}

const Avatar: React.FC<AvatarProps> = ({ imageSource, name }) =>  {
  const initials = name
    ?.split(' ')
    .map(name => name.slice(0, 1))
    .join()
    .replaceAll(',', '')

  return (
    <S.Avatar> 
      <S.Image
        src={imageSource}
        alt={name}
      />

      <S.Fallback delayMs={600}>
        {initials || name}
      </S.Fallback>
    </S.Avatar>
  )
}

export { Avatar }
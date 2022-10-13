import React from 'react';

import * as S from './styles';

export interface SpecCardProps {
  text: string
  image: string
}

const SpecCard: React.FC<SpecCardProps> = ({ text, image }) => {
  return (
    <S.SpecCardContainer>
      <S.SpecCardImage>
        <img src={image} alt={text} />
      </S.SpecCardImage>

      <S.SpecCardText>
        <p>{text}</p>
      </S.SpecCardText>
    </S.SpecCardContainer>
  )
}

export { SpecCard }
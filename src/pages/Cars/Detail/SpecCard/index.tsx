import React from 'react';
import { Specification } from '../../List';

import * as S from './styles';

export interface SpecCardProps {
  specification: Specification
}

const SpecCard: React.FC<SpecCardProps> = ({ specification }) => (
  <S.SpecCardContainer>
    <S.SpecCardImage>
      <img 
        src={`/assets/CarSpecsImages/${specification.name}.svg`} 
        alt={specification.name} 
      />
    </S.SpecCardImage>

    <S.SpecCardText>
      <p>{specification.description}</p>
    </S.SpecCardText>
  </S.SpecCardContainer>
)

export { SpecCard }
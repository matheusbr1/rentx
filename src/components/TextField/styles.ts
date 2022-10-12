import styled from 'styled-components'
import { pxToRem } from '../../styles/utils/pxToRem';

interface Props {
  isErrored?: boolean
}

export const FieldWrapper = styled.div<Props>`
  width: 100%;
  max-width: 100%;
  max-height: ${pxToRem(70)};

  @media(max-width: 720px) {
    min-width: unset;
    max-height: unset;
  }

  background-color: ${(props => props.theme.colors.white.main)};

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid;
  border-color: ${({ theme, isErrored }) => isErrored 
    ? theme.colors.red.main
    : theme.colors.gray[100]
  };
`

export const FieldStartIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 4px solid ${({ theme }) => theme.colors.gray[50]};
  padding: ${pxToRem(22)};
`

export const FieldEndIconBox = styled.div`
  button {
    border: none;
    background-color: transparent;
  }
  
  padding: ${pxToRem(22)};
`

export const Field = styled.input`
  padding: ${pxToRem(22)};

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(19)};

  border: unset;
  width: 100%;
 
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]}
  }
`

export const FieldHelperText = styled.span<Props>`
  display: block;
  padding: ${pxToRem(8)};
  
  font-weight: 500;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(16)};
  color: ${({ theme, isErrored }) => isErrored 
    ? theme.colors.red.main
    : theme.colors.gray[500]
  };
`
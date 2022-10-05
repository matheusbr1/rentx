import styled from 'styled-components'
import { pxToRem } from '../../styles/utils/pxToRem';

interface Props {
  isErrored?: boolean
}

export const FieldWrapper = styled.div`
  width: 100%;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid;
  border-color: ${(props: Props) => props.isErrored ? '#DC1637' : '#EBEBF0'};
`

export const FieldStartIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 4px solid #F4F5F6;
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
  font-size: 16px;
  line-height: 19px;

  border: unset;
  width: 100%;
 
  &::placeholder {
    color: #AEAEB3;
  }
`

export const FieldHelperText = styled.span`
  display: block;
  padding: ${pxToRem(8)};
  
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${(props: Props) => props.isErrored ? '#DC1637' : '#7A7A80'};
`
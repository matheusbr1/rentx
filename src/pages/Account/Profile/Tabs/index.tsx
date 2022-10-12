import React from "react";
import { Button } from "../../../../components/Button";
import { TextField } from "../../../../components/TextField";

import * as S from './styles'

const tabsArr = [
  {
    label: 'Dados',
    content: (
      <S.Form>
        <TextField placeholder="Nome" icon='email' />
        <TextField placeholder="Email" icon='email' />
        <TextField placeholder="CNH" icon='email' />
        <Button width="full" >
          Salvar Alterações
        </Button>
      </S.Form>
    )
  },
  {
    label: 'Trocar senha',
    content: (
      <S.Form>
        <TextField placeholder="Senha Atual" icon='password' type='password' />
        <TextField placeholder="Senha" icon='password' type='password' />
        <TextField placeholder="Repetir Senha" icon='password' type='password' />
        <Button width="full" >
          Salvar Alterações
        </Button>
      </S.Form>
    )
  }
]

const Tabs: React.FC = () => {
  return (
    <S.Tabs defaultValue="tab-1" >
      <S.List>
        {tabsArr.map((tab, idx) => <S.Trigger value={'tab-' + idx}>{tab.label}</S.Trigger>)}
      </S.List>

      {tabsArr.map((tab, idx) => <S.Content value={'tab-' + idx} >{tab.content}</S.Content>)}
    </S.Tabs>
  )
}

export { Tabs }
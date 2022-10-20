import React from "react";

import * as S from './styles'

import { ChangeDataForm, ChangePasswordForm } from './Form'

const tabsArr = [
  { label: 'Dados', content: ChangeDataForm },
  { label: 'Trocar senha', content: ChangePasswordForm }
]

const Tabs: React.FC = () => {
  return (
    <S.Tabs defaultValue="tab-0" >
      <S.List>
        {tabsArr.map((tab, idx) => <S.Trigger value={'tab-' + idx}>{tab.label}</S.Trigger>)}
      </S.List>

      {tabsArr.map((Tab, idx) => (
        <S.Content value={'tab-' + idx} >
          <Tab.content />
        </S.Content>
      ))}
    </S.Tabs>
  )
}

export { Tabs }
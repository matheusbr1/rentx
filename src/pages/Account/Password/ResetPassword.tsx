import React from 'react';
import { AppBar } from '../../../components/AppBar';
import { Button } from '../../../components/Button';
import { Layout } from '../../../components/Layout';
import { TextField } from '../../../components/TextField';

import * as S from './styles'

const ResetPassword: React.FC = () => {
  return (
    <Layout
      appBarComponent={<AppBar title='Perfil' />}
    >
      <S.Content>
        <S.LeftSide>
          <img src="/assets/Audi2.svg" alt="Carro Audi" />
        </S.LeftSide>

        <S.RightSide>
          <S.Form action="">
            <h1>Alterar Senha</h1>

            <p>Escolha uma nova senha <br /> para a sua conta!</p>

            <TextField 
              placeholder='Nova Senha' 
              type='password'
              icon='password' 
            />

            <TextField 
              placeholder='Confirmar Senha' 
              type='password'
              icon='password'  
            />

            <Button width='full' >
              Alterar
            </Button>
          </S.Form>
        </S.RightSide>
      </S.Content>
    </Layout>
  )
}

export { ResetPassword }
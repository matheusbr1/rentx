import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '../../../components/AppBar';
import { Button } from '../../../components/Button';
import { Layout } from '../../../components/Layout';
import { TextField } from '../../../components/TextField';

import * as S from './styles'

const PasswordRecovery: React.FC = () => {
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
            <h1>Recuperar Senha</h1>

            <p>Insira seu e-mail para receber um <br /> link de recuperação</p>

            <TextField 
              placeholder='E-mail' 
              icon='email' 
            />

            <Link to='/account/signin' >
              Voltar para a página de login
            </Link>

            <Button width='full' >
              Enviar
            </Button>
          </S.Form>
        </S.RightSide>
      </S.Content>
    </Layout>
  )
}

export { PasswordRecovery }
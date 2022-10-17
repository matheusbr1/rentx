import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '../../../components/AppBar';
import { Button } from '../../../components/Button';
import { Layout } from '../../../components/Layout';
import { TextField } from '../../../components/TextField';

import * as S from './styles'

const SignUp: React.FC = () => {
  return (
    <Layout
      appBarComponent={<AppBar title='Perfil' />}
    >
      <S.Content>
        <S.LeftSide>
          <S.Form action="">
            <h1>Crie sua conta</h1>

            <p>Faça seu cadastro de forma <br /> rápida e fácil.</p>

            <TextField 
              placeholder='Nome' 
              icon='email' 
            />

            <TextField 
              placeholder='E-mail' 
              icon='email' 
              type='email'
            />

            <TextField 
              placeholder='CNH' 
              icon='email' 
            />

            <TextField 
              placeholder='Senha' 
              icon='password' 
              type='password' 
            />

            <Link to='/account/signin' >
              Voltar para a página de login
            </Link>

            <Button width='full'>
              Cadastrar
            </Button>
          </S.Form>
        </S.LeftSide>

        <S.RightSide>
          <img src="/assets/bgs/Dodge.svg" alt="Carro Dodge" />
        </S.RightSide>
      </S.Content>
    </Layout>
  )
}

export { SignUp }
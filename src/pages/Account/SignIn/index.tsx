import React from 'react';
import { AppBar } from '../../../components/AppBar';
import { Button } from '../../../components/Button';
import { Layout } from '../../../components/Layout';
import { TextField } from '../../../components/TextField';

import * as S from './styles'

const SignIn: React.FC = () => {
  return (
    <Layout
      appBarComponent={<AppBar title='Perfil' />}
    >
      <S.SignInContent>
        <S.LeftSide>
          <img src="/assets/AudiSignInBg.svg" alt="Carro Audi" />
        </S.LeftSide>

        <S.RightSide>
          <S.SignInForm action="">
            <h1>Estamos quase lá.</h1>

            <p>Faça seu login para começar uma <br /> experiência incrível.</p>

            <TextField 
              placeholder='E-mail' 
              icon='email' 
              type='email'
            />

            <TextField 
              placeholder='Senha' 
              icon='password' 
              type='password' 
            />

            <Button width='full' >
              Login
            </Button>

            <Button width='full' variant='secondary' >
              Criar conta gratuita
            </Button>
          </S.SignInForm>
        </S.RightSide>
      </S.SignInContent>
    </Layout>
  )
}

export { SignIn }
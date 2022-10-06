import React from 'react';
import { Link } from 'react-router-dom';
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
      <S.Content>
        <S.LeftSide>
          <img src="/assets/AudiSignInBg.svg" alt="Carro Audi" />
        </S.LeftSide>

        <S.RightSide>
          <S.Form action="">
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

            <Link to='/account/password-recovery' >
              Esqueci minha senha
            </Link>

            <Button width='full' >
              Login
            </Button>

            <Button width='full' variant='secondary' >
              Criar conta gratuita
            </Button>
          </S.Form>
        </S.RightSide>
      </S.Content>
    </Layout>
  )
}

export { SignIn }
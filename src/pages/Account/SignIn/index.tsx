import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar } from '../../../components/AppBar';
import { Button } from '../../../components/Button';
import { Layout } from '../../../components/Layout';
import { TextField } from '../../../components/TextField';

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import * as S from './styles'

interface ISignInFields {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string()
    .required('Campo Obrigatório!')
    .email('Endereço de E-mail inválido!'),
  password: yup.string()
    .required('Campo Obrigatório!')
});

const SignIn: React.FC = () => {
  const { push } = useHistory()
  
  const { register, handleSubmit, formState: { errors } } = useForm<ISignInFields>({
    resolver: yupResolver(schema)
  });
  
  const onSubmit: SubmitHandler<ISignInFields> = data => {
    alert(JSON.stringify(data));
  };

  return (
    <Layout
      appBarComponent={<AppBar title='Perfil' />}
    >
      <S.Content>
        <S.LeftSide>
          <img src="/assets/Audi2.svg" alt="Carro Audi" />
        </S.LeftSide>

        <S.RightSide>
          <S.Form onSubmit={handleSubmit(onSubmit)} >
            <h1>Estamos quase lá.</h1>

            <p>Faça seu login para começar uma <br /> experiência incrível.</p>

            <TextField 
              placeholder='E-mail'
              icon='email' 
              type='email'
              {...register("email", { required: true })}
              isErrored={!!errors.email?.message}
              helperText={errors.email?.message}
            />

            <TextField 
              placeholder='Senha' 
              icon='password' 
              type='password'
              {...register("password")}
              isErrored={!!errors.password?.message}
              helperText={errors.password?.message}
            />

            <Link to='/account/password-recovery' >
              Esqueci minha senha
            </Link>

            <Button width='full' >
              Login
            </Button>

            <Button 
              width='full' 
              variant='secondary' 
              onClick={() => push('/account/signup')} 
            >
              Criar conta gratuita
            </Button>
          </S.Form>
        </S.RightSide>
      </S.Content>
    </Layout>
  )
}

export { SignIn }
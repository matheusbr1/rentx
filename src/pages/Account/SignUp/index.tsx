import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { AppBar } from '../../../components/AppBar';
import { Button } from '../../../components/Button';
import { Layout } from '../../../components/Layout';
import { TextField } from '../../../components/TextField';
import { SignUpFields, useAuth } from '../../../hooks/contexts/useAuth';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import * as S from './styles'

const schema = yup.object({
  name: yup.string()
    .required('Campo Obrigatório!'),
  email: yup.string()
    .required('Campo Obrigatório!')
    .email('Endereço de E-mail inválido!'),
  driver_license: yup.string()
    .required('Campo Obrigatório!')
    .max(11, 'CNH inválida'),
  password: yup.string()
    .required('Campo Obrigatório!')
    .min(4, 'A senha deve conter no mínimo 4 caracteres'),
});

const SignUp: React.FC = () => {
  const { push } = useHistory()

  const { signUp } = useAuth()

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpFields>({
    resolver: yupResolver(schema),
    shouldFocusError: true
  })

  const onSubmit: SubmitHandler<SignUpFields> = async fields => {
    try {
      await signUp(fields)
      push('/account/signIn')  
    } catch (error) {
      // do nothing
    }
  } 

  return (
    <Layout
      appBarComponent={<AppBar title='Perfil' />}
    >
      <S.Content>
        <S.LeftSide>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Crie sua conta</h1>

            <p>Faça seu cadastro de forma <br /> rápida e fácil.</p>

            <TextField 
              placeholder='Nome' 
              icon='profile'
              {...register("name")}
              isErrored={!!errors.name?.message}
              helperText={errors.name?.message}
            />

            <TextField 
              placeholder='E-mail' 
              icon='email' 
              type='email'
              {...register("email")}
              isErrored={!!errors.email?.message}
              helperText={errors.email?.message}
            />

            <TextField 
              placeholder='CNH' 
              icon='car'
              {...register("driver_license")}
              isErrored={!!errors.driver_license?.message}
              helperText={errors.driver_license?.message}
            />

            <TextField 
              placeholder='Senha' 
              icon='password' 
              type='password'
              {...register("password")}
              isErrored={!!errors.password?.message}
              helperText={errors.password?.message}
            />

            <Link to='/account/signin' >
              Voltar para a página de login
            </Link>

            <Button width='full' disabled={isSubmitting} >
              {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
          </S.Form>
        </S.LeftSide>

        <S.RightSide>
          <img src="/assets/Dodge.svg" alt="Carro Dodge" />
        </S.RightSide>
      </S.Content>
    </Layout>
  )
}

export { SignUp }
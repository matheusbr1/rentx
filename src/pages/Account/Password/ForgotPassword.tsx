import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { AppBar } from '../../../components/AppBar';
import { Button } from '../../../components/Button';
import { Layout } from '../../../components/Layout';
import { TextField } from '../../../components/TextField';

import * as S from './styles'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../../services/api';
import toast from 'react-hot-toast';

const schema = yup.object({
  email: yup.string()
    .required('Campo Obrigatório!')
    .email('Endereço de E-mail inválido!'),
});

interface ForgotPasswordFiels {
  email: string
}

const ForgotPassword: React.FC = () => {
  const { push } = useHistory()

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ForgotPasswordFiels>({
    resolver: yupResolver(schema),
    shouldFocusError: true
  })

  const onSubmit: SubmitHandler<ForgotPasswordFiels> = async ({ email }) => {
    try {
      await api.post('password/forgot', { email })

      toast.success('E-mail enviado com sucesso!')

      push('/account/signin')
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar o email!')
    }
  }

  return (
    <Layout
      appBarComponent={<AppBar title='Perfil' />}
    >
      <S.Content>
        <S.LeftSide>
          <img src="/assets/Audi2.svg" alt="Carro Audi" />
        </S.LeftSide>

        <S.RightSide>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Recuperar Senha</h1>

            <p>Insira seu e-mail para receber um <br /> link de recuperação</p>

            <TextField 
              placeholder='E-mail'
              icon='email' 
              type='email'
              {...register("email")}
              isErrored={!!errors.email?.message}
              helperText={errors.email?.message}
            />

            <Link to='/account/signin' >
              Voltar para a página de login
            </Link>

            <Button width='full' >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </S.Form>
        </S.RightSide>
      </S.Content>
    </Layout>
  )
}

export { ForgotPassword }
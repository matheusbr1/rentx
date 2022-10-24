import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

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
  password: yup.string()
    .required('Campo Obrigatório!')
    .min(4, 'A senha deve conter no mínimo 4 caracteres'),
  password_confirmation: yup.string()
    .required('Campo Obrigatório!')
    .oneOf(
      [yup.ref('password'), undefined], 
      'Confirmação incorreta'
    )
});

interface ResetPasswordFiels {
  password: string
  password_confirmation: string
}

const ResetPassword: React.FC = () => {
  const { push, location } = useHistory()

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ResetPasswordFiels>({
    resolver: yupResolver(schema),
    shouldFocusError: true
  })

  const onSubmit: SubmitHandler<ResetPasswordFiels> = async ({ password }) => {
    try {
      const [_, token] = location.search.slice(1).split('=')

      await api.post('password/reset', { password }, {
        params: {
          'token': token
        }
      })

      toast.success('Senha alterada com sucesso!')

      push('/account/signin')
    } catch (error) {
      toast.error('Ocorreu um erro ao alterar a senha!')
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
            <h1>Alterar Senha</h1>

            <p>Escolha uma nova senha <br /> para a sua conta!</p>

            <TextField 
              placeholder='Nova Senha' 
              type='password'
              icon='password'
              {...register('password')}
              isErrored={!!errors.password?.message}
              helperText={errors.password?.message}
            />

            <TextField 
              placeholder='Confirmar Senha' 
              type='password'
              icon='password'
              {...register('password_confirmation')}
              isErrored={!!errors.password_confirmation?.message}
              helperText={errors.password_confirmation?.message}
            />

            <Button width='full' >
              {isSubmitting ? 'Alterando...' : 'Alterar'}
            </Button>
          </S.Form>
        </S.RightSide>
      </S.Content>
    </Layout>
  )
}

export { ResetPassword }
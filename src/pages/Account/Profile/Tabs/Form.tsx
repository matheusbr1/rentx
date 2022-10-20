import React from 'react'

import { Button } from "../../../../components/Button";
import { TextField } from "../../../../components/TextField";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import * as S from './styles'
import { api } from '../../../../services/api';
import { useAuth } from '../../../../hooks/contexts/useAuth';

async function fakeRequest(time: number, error?: boolean) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      error ? reject(null) :  resolve(null)
    }, time)
  })
}

const profileDataSchema = yup.object({
  name: yup.string()
    .required('Campo Obrigatório!'),
  email: yup.string()
    .required('Campo Obrigatório!')
    .email('Endereço de E-mail inválido!'),
  driver_license: yup.string()
    .required('Campo Obrigatório!')
    .max(11, 'CNH inválida'),
});

interface DataFormFiels {
  name: string
  email: string
  driver_license: string
}

export const ChangeDataForm: React.FC = () => {
  const { user } = useAuth()

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DataFormFiels>({ 
    resolver: yupResolver(profileDataSchema),
    shouldFocusError: true,
    defaultValues: {
      driver_license: user?.driver_license,
      name: user?.name,
      email: user?.email
    }
   })

   const onSubmit: SubmitHandler<DataFormFiels> = async fields => {
    try {
      await api.put('/users', fields)

      console.log('Dados alterados com sucesso!')
    } catch (error) {
      console.log('Ocorreu um erro ao realizar a alteração!')
    }
   }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} >
      <TextField 
        placeholder="Nome" 
        icon='profile'
        {...register("name")}
        isErrored={!!errors.name?.message}
        helperText={errors.name?.message}
      />
      
      <TextField 
        placeholder="Email" 
        icon='email' 
        {...register("email")}
        isErrored={!!errors.email?.message}
        helperText={errors.email?.message}
      />
      
      <TextField 
        placeholder="CNH" 
        icon='car'
        {...register("driver_license")}
        isErrored={!!errors.driver_license?.message}
        helperText={errors.driver_license?.message}
      />
      
      <Button width="full" disabled={isSubmitting} >
        {isSubmitting ? 'Salvando...' : 'Salvar Alterações'}
      </Button>
    </S.Form>
  )
}

const changePasswordSchema = yup.object({
  current_password: yup.string()
    .required('Campo Obrigatório!')
    .min(4, 'A senha deve conter no mínimo 4 caracteres'),
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

interface ChangePasswordFields {
  current_password: string
  password: string
  password_confirmation: string
}

export const ChangePasswordForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<ChangePasswordFields>({ 
    resolver: yupResolver(changePasswordSchema),
    shouldFocusError: true
   })

   const onSubmit: SubmitHandler<ChangePasswordFields> = async fields => {
    try {
      let isOldPasswordCorrect = false
      
      // Verificar se a senha antiga está correta
      // Criar endpoint para verificação

      if (isOldPasswordCorrect) {
        await api.put('/users', fields)

        console.log('Dados alterados com sucesso!')
      } else {
        setError('current_password', {
          message: 'Senha incorreta!',
        }, {
          shouldFocus: true
        })
      }
    } catch (error) {
      console.log('Ocorreu um erro ao realizar a alteração!')
    }
   }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} >
      <TextField 
        placeholder="Senha Atual" 
        icon='password' 
        type='password'
        {...register("current_password")}
        isErrored={!!errors.current_password?.message}
        helperText={errors.current_password?.message}
      />
      
      <TextField 
        placeholder="Senha" 
        icon='password' 
        type='password'
        {...register("password")}
        isErrored={!!errors.password?.message}
        helperText={errors.password?.message}
      />
      
      <TextField 
        placeholder="Repetir Senha" 
        icon='password' 
        type='password'
        {...register("password_confirmation")}
        isErrored={!!errors.password_confirmation?.message}
        helperText={errors.password_confirmation?.message}
      />

      <Button width="full" disabled={isSubmitting} >
        {isSubmitting ? 'Salvando...' : 'Salvar Alterações'}
      </Button>
    </S.Form>
  )
}
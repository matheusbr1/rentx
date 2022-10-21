  import React, { useEffect,  memo, useState } from 'react';
import { AppBar } from '../../../components/AppBar';
import { Layout } from '../../../components/Layout';

import * as S from './styles'

import { Avatar } from './Avatar';
import { Tabs } from './Tabs';
import { RentCard } from './RentCard';
import { useAuth } from '../../../hooks/contexts/useAuth';
import { api } from '../../../services/api';

type Car = {
  name: string
  brand: string
  daily_rate: string
}

export type Rent = {
  id: string
  start_date: Date
  end_date: Date
  expected_return_date: Date
  total: string
  car: Car
}

const Profile: React.FC = () => {
  const [rentals, setRentals] = useState<Rent[]>([])

  const { user, getUserProfile } = useAuth()

  async function getUserRentals () {
    try {
      const { data } = await api.get('rentals/user')

      setRentals(data)
    } catch (error) {
      console.log('Não foi possível buscar os aluguéis!')
    }
  }

  useEffect(() => {
    (async () => {
      await getUserProfile()
      await getUserRentals()
    })()
  }, [])

  return (
    <Layout
      appBarComponent={<AppBar title='Perfil' />}
    >
      <S.Content>
        <S.LeftSide>
          <S.ProfileEdition>
            <Avatar 
              imageSource={user?.avatar_URL}
              name={user?.name}
            />

            <Tabs />
          </S.ProfileEdition>
        </S.LeftSide>
      
        <S.Separator />

        <S.RightSide>
          <S.ProfileAppointments>
            <h1>Agendamentos feitos</h1>

            <S.AppointmentsList>
              {rentals.map(rent => 
                <RentCard
                  key={rent.id}  
                  rent={rent}
                />
              )}
            </S.AppointmentsList>
          </S.ProfileAppointments>
        </S.RightSide>
      </S.Content>
    </Layout>
  )
}

const memoized = memo(Profile)

export { memoized as Profile }
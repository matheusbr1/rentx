  import React, { memo } from 'react';
import { AppBar } from '../../../components/AppBar';
import { Layout } from '../../../components/Layout';

import * as S from './styles'

import { Avatar } from './Avatar';
import { Tabs } from './Tabs';
import { RentCard } from './RentCard';
import { Car } from '../../Cars/List';
import { useProfile, useUserRentals } from '../../../fetchs';

export type Rent = {
  id: string
  start_date: Date
  end_date: Date
  expected_return_date: Date
  total: string
  car: Car
}

const Profile: React.FC = () => {
  const { data: profile } = useProfile()
  const { data: rentals = [] } = useUserRentals()

  return (
    <Layout
      appBarComponent={<AppBar title='Perfil' />}
    >
      <S.Content>
        <S.LeftSide>
          <S.ProfileEdition>
            <Avatar 
              imageSource={profile?.avatar_URL}
              name={profile?.name}
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
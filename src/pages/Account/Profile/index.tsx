import React, { useEffect, useMemo, memo } from 'react';
import { AppBar } from '../../../components/AppBar';
import { Layout } from '../../../components/Layout';

import * as S from './styles'

import { Avatar } from './Avatar';
import { Tabs } from './Tabs';
import { AppointmentCard } from './AppointmentCard';
import { useAuth } from '../../../hooks/contexts/useAuth';

export const appointment = {
  id: "666e65d6-5604-4ad9-a5ec-277246036a1e",
  start_date: "2022-05-21T00:29:00.949Z",
  end_date: "2022-05-23T00:29:36.981Z",
  expected_return_date: "2022-05-24T15:52:05.880Z",
  total: "200",
  car: {
    name: "Audi A3",
    brand: "Audi",
    daily_rate: "100",
  }
}

export type Appointment = typeof appointment

const Profile: React.FC = () => {
  const appointments = useMemo(() => {
    const array = []
    
    for (let i=0; i<20; i++) {
      array.push({
        ...appointment,
        id: appointment.id + i
      })
    }

    return array
  }, [])

  const { user, getUserProfile } = useAuth()

  useEffect(() => {
    (async () => {
      if (!user) {
        await getUserProfile()
      } else {
        // get appointments
      }
    } )()
  }, [])

  return (
    <Layout
      appBarComponent={<AppBar title='Perfil' />}
    >
      <S.Content>
        <S.LeftSide>
          <S.ProfileEdition>
            <Avatar 
              imageSource='hhttps://lh3.googleusercontent.com/a/ALm5wu2F4e66k4Am3qQkT4hB3MPApOs8neetrTJChf8T04k=s288-p-rw-no'
              name='Nome'
            />

            <Tabs />
          </S.ProfileEdition>
        </S.LeftSide>
      
        <S.Separator />

        <S.RightSide>
          <S.ProfileAppointments>
            <h1>Agendamentos feitos</h1>

            <S.AppointmentsList>
              {appointments.map(appointment => 
                <AppointmentCard 
                  key={appointment.id}  
                  appointment={appointment}/>
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
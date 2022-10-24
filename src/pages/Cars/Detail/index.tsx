import React, { useState } from 'react';
import { Button } from '../../../components/Button'
import { Link, useHistory } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { SpecCard } from './SpecCard';
import { Carousel } from './Carousel';

import * as S from './styles';
import { Tabs } from './Tabs';
import { Modal } from './Modal';
import { formatCurrency } from '../../../utils/formatters';
import { useRent } from '../../../hooks/contexts/useRent';
import { api } from '../../../services/api';
import { queryClient } from '../../../App';
import toast from 'react-hot-toast';

const CarDetail: React.FC = () => {
  const { push } = useHistory()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { isPeriodSelected, selectedCar, period } = useRent()

  if (!selectedCar) {
    push('/cars/list')
  }

  async function rentCar() {
    try {
      await api.post('/rentals', {
        car_id: selectedCar?.id,
	      expected_return_date: isPeriodSelected ? period[1] : null
      })

      push('/cars/rented')

      queryClient.invalidateQueries(['cars'])
      queryClient.invalidateQueries(['rentals'])
    } catch (error) {
      toast.error('Ocorreu um erro ao alugar esse carro!')
    }
  }

  return (
    <Layout>
      <S.CarDetailHeader>
        <Link to='/cars/list' >
          <img src='/assets/Voltar.svg' />
        </Link>

        <div>
          <p>{selectedCar?.brand}</p>
          <p>AO DIA</p>
          <h1>{selectedCar?.name}</h1>
          <h2>{formatCurrency(selectedCar?.daily_rate)}</h2>
        </div>
      </S.CarDetailHeader>

      <S.Separator />

      <S.CarDetailContent>
        <div>
          <Carousel images={selectedCar?.images || []} />
        </div>

        <S.CarDetailsWrapper>
          <S.CarSpecCardWrapper>
            {selectedCar?.specifications.map(specification => (
              <SpecCard 
                key={specification.id}
                specification={specification}
              />
            ))}
          </S.CarSpecCardWrapper>

          <Tabs onOpenCalendar={() => setIsModalOpen(true)} />

          {isPeriodSelected ? (
            <Button variant='success' width='full' onClick={rentCar} >
              Alugar agora
            </Button>
          ) : (
            <Button width='full' onClick={() => setIsModalOpen(true)} >
              Escolher período do aluguel
            </Button>
          )}
          
          <Modal 
            open={isModalOpen}
            setIsOpen={setIsModalOpen} 
          />
        </S.CarDetailsWrapper>
      </S.CarDetailContent>
    </Layout>
  )
}

export { CarDetail }
import React, { useEffect, useState } from 'react';
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

const CarDetail: React.FC = () => {
  const { push } = useHistory()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { isPeriodSelected, selectedCar } = useRent()

  if (!selectedCar) {
    push('/cars/list')
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
            <Button variant='success' width='full' onClick={() => push('/cars/rented')} >
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
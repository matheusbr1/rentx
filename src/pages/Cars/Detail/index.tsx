import React, { useMemo, useState } from 'react';
import { Button } from '../../../components/Button'
import { Link, useHistory } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { SpecCard } from './SpecCard';
import { Carousel } from './Carousel';

import * as S from './styles';
import { Tabs } from './Tabs';
import { Modal } from './Modal';
import { useCars } from '../../../fetchs';
import { Car, CarImage, Specification } from '../List';
import { formatCurrency } from '../../../utils/formatters';

export const car = {
  images: [
    { id: '1', image_URL: "/assets/Audi.svg" },
    { id: '2', image_URL: "/assets/Audi.svg" },
  ] as CarImage[],
  specifications: [
    { id: '1', name: 'max-speed', description: '270km/h' },
    { id: '2', name: 'seats', description: '5 Pessoas' },
    { id: '3', name: 'fuel', description: 'Gasolina' },
  ] as Specification[]
}

const CarDetail: React.FC = () => {
  const { location, push } = useHistory()

  const arr = location.pathname.split('/')
  const id = arr[arr.length - 1]

  const { data: cars = [] } = useCars()
  
  const selectedCar = useMemo(() => {
    const car = cars.find(car => car.id === id)
    
    if (!car) {
      push('/cars/list')
    }

    return car as Car
  }, [cars, id])

  const [isPeriodSelected, setIsPeriodSelected] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
          <Carousel images={selectedCar?.images} />
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

          <Tabs 
            onOpenCalendar={() => setIsModalOpen(true)}
            carDescription={selectedCar?.description}
          />

          {isPeriodSelected ? (
            <Button variant='success' width='full' onClick={() => push('rented')} >
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
            onConfirm={() => setIsPeriodSelected(true)} 
          />
        </S.CarDetailsWrapper>
      </S.CarDetailContent>
    </Layout>
  )
}

export { CarDetail }
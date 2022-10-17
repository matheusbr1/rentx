import React, { useState } from 'react';
import { Button } from '../../../components/Button'
import { Link, useHistory } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { SpecCard } from './SpecCard';
import { Carousel } from './Carousel';

import * as S from './styles';
import { Tabs } from './Tabs';
import { Modal } from './Modal';

export const car = {
  images: [
    "/assets/Audi.svg",
    "/assets/Audi.svg",
    "/assets/Audi.svg",
  ],
  specifications: [
    { img: '/assets/SpeedSpec.svg', text: '270km/h' },
    { img: '/assets/SpeedSpec.svg', text: '6.8s' },
    { img: '/assets/SpeedSpec.svg', text: 'Gasolina' },
    { img: '/assets/SpeedSpec.svg', text: 'Auto' },
    { img: '/assets/SpeedSpec.svg', text: '5 pessoas' },
    { img: '/assets/SpeedSpec.svg', text: '280 HP' },
  ]
}

const CarDetail: React.FC = () => {
  const history = useHistory()

  const [isPeriodSelected, setIsPeriodSelected] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Layout>
      <S.CarDetailHeader>
        <Link to='/cars/list' >
          <img src='/assets/Voltar.svg' />
        </Link>

        <div>
          <p>Audi</p>
          <p>AO DIA</p>
          <h1>RS 5 Coupé</h1>
          <h2>R$ 640</h2>
        </div>
      </S.CarDetailHeader>

      <S.Separator />

      <S.CarDetailContent>
        <div>
          <Carousel images={car.images} />
        </div>

        <S.CarDetailsWrapper>
          <S.CarSpecCardWrapper>
            {car.specifications.map(spec => (
              <SpecCard 
                image={spec.img}
                text={spec.text}
                key={spec.text} 
              />
            ))}
          </S.CarSpecCardWrapper>

          <Tabs onOpenCalendar={() => setIsModalOpen(true)} />

          {isPeriodSelected ? (
            <Button variant='success' width='full' onClick={() => history.push('rented')} >
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
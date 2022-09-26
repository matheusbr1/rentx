import React from 'react';
import Carousel from 'better-react-carousel'
import { Button } from '../../../components/Button'
import { Link } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { SpecCard } from '../../../components/SpecCard';

import * as S from './styles';

const images = [
  "/assets/carrousel/Audi.svg",
  "/assets/carrousel/Audi.svg",
  "/assets/carrousel/Audi.svg",
]

const Gallery = () => {
  return (
    <Carousel cols={1} rows={1} gap={10} loop >
      {images.map(image => (
        <Carousel.Item>
          <div style={{ 
              display: 'flex',
              justifyContent: 'center'
            }}  
          >
            <img width="90%" src={image} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

const CarDetail: React.FC = () => {

  const specifications = [
    { img: '/assets/SpeedSpec.svg', text: '270km/h' },
    { img: '/assets/SpeedSpec.svg', text: '6.8s' },
    { img: '/assets/SpeedSpec.svg', text: 'Gasolina' },
    { img: '/assets/SpeedSpec.svg', text: 'Auto' },
    { img: '/assets/SpeedSpec.svg', text: '5 pessoas' },
    { img: '/assets/SpeedSpec.svg', text: '280 HP' },
  ]

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
          <Gallery />
        </div>

        <S.CarDetailsWrapper>
          <S.CarSpecCardWrapper>
            {specifications.map(spec => (
              <SpecCard 
                image={spec.img}
                text={spec.text}
                key={spec.text} 
              />
            ))}
          </S.CarSpecCardWrapper>

          <Button variant='success' width='full' >
            Alugar agora
          </Button>
        </S.CarDetailsWrapper>
      </S.CarDetailContent>
    </Layout>
  )
}

export { CarDetail }
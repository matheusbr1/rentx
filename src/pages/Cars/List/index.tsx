import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '../../../components/AppBar';
import { Card } from '../../../components/Card';
import { Layout } from '../../../components/Layout';
import { useCars } from '../../../fetchs';
import * as S from './styles';

type CarImage = {
  id: string
  image_URL: string
}

export type Car = {
  id: string
  name: string
  daily_rate: string
  brand: string
  images: CarImage[]
}

const CarsList: React.FC = () => {
   const { data = [] } = useCars()

  return (
    <Layout
      appBarComponent={<AppBar title='Início' />}
    >
      <>
        <S.TitleRow>
          <h1>Carros disponíveis</h1>
          <p>Total 12 carros</p>
        </S.TitleRow>

        <S.Separator decorative orientation="horizontal" />

        <S.GridContainer>
          {data?.map((car: Car) => (
            <S.GridItem key={car.id} >
              <Link to={`/cars/detail/${car.id}`} >
                <Card 
                  key={car.id}
                  brand={car.brand}
                  model={car.name}
                  daily_rate={car.daily_rate}
                  image_URL={car.images[0]?.image_URL}
                />
              </Link>
            </S.GridItem>
          ))}
        </S.GridContainer>
      </>
    </Layout>
  )
}

export { CarsList };
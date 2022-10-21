import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '../../../components/AppBar';
import { Card } from '../../../components/Card';
import { Layout } from '../../../components/Layout';
import { api } from '../../../services/api';
import * as S from './styles';

type CarImage = {
  id: string
  image_URL: string
}

type Car = {
  id: string
  name: string
  daily_rate: string
  brand: string
  images: CarImage[]
}

const CarsList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    if (!cars.length) {
      api.get('/cars/available')
        .then(response => setCars(response.data))
    }
  }, [])

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
          {cars.map((car: Car) => (
            <S.GridItem>
              <Link to='/cars/detail' >
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
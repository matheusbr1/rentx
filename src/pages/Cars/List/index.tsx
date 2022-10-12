import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '../../../components/AppBar';
import { Card } from '../../../components/Card';
import { Layout } from '../../../components/Layout';
import { api } from '../../../services/api';
import * as S from './styles';

const CarsList: React.FC = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    api.get('/cars/available')
      .then(response => setCars(response.data))
  }, [])

  return (
    <Layout
      appBarComponent={<AppBar title='Início' />}
    >
      <S.CarListWrapper>
        <S.TitleRow>
          <h1>Carros disponíveis</h1>
          <p>Total 12 carros</p>
        </S.TitleRow>

        <S.Separator decorative orientation="horizontal" />

        <S.GridContainer>
          {cars.map((car: any) => (
            <S.GridItem>
              <Link to='/cars/detail' >
                <Card 
                  key={car.id}
                  brand='AUDI'
                  model='RS 5 Coupé'
                  price={640}
                />
              </Link>
            </S.GridItem>
          ))}
        </S.GridContainer>
      </S.CarListWrapper>
    </Layout>
  )
}

export { CarsList };
import React, { useEffect, useState } from 'react';
import { AppBar } from '../../../components/AppBar';
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
      <h1>List Works</h1>
    </Layout>
  )
}

export { CarsList };
import React from 'react';
import { AppBar } from '../../../components/AppBar';
import { Layout } from '../../../components/Layout';

const CarsFilter: React.FC = () => {
  return (
    <Layout
      appBarComponent={<AppBar title='Filtrar Carros' />}
    >
      <h1>Car Filter Works</h1>
    </Layout>
  )
}

export { CarsFilter }
import React from 'react';
import { AppBar } from '../../../components/AppBar';
import { Layout } from '../../../components/Layout';
import * as S from './styles';

const CarsList: React.FC = () => {
  return (
    <Layout
      appBarComponent={<AppBar title='Início' />}
    >
      <h1>List Works</h1>
    </Layout>
  )
}

export { CarsList };
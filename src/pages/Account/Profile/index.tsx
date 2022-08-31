import React from 'react';
import { AppBar } from '../../../components/AppBar';
import { Layout } from '../../../components/Layout';

const Profile: React.FC = () => {
  return (
    <Layout
      appBarComponent={<AppBar title='Perfil' />}
    >
      <h1>Profile Works</h1>
    </Layout>
  )
}

export { Profile }
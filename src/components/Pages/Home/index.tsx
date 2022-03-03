import React from 'react';
import Layout from '../../Layout';
import { Contact } from '../Contact';
import { Products } from '../Products';
import { Tread } from './Tread';

const Home = () => {
  return (
    <Layout>
      <Tread />
      <Products />
      <Contact />
    </Layout>
  );
}

export default Home;
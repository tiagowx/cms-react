import React from 'react';
import Layout from '../../Layout';
import { Contact } from '../Contact';
import { Solutions } from '../Solutions';
import { Tread } from './Tread';

const Home = () => {
  return (
    <Layout>
      <Tread />
      <Solutions />
      <Contact />
    </Layout>
  );
}

export default Home;
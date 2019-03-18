import React from 'react';
import { Helmet } from 'react-helmet';
import './home.scss';
import Header from 'components/header/header';
import Menu from 'components/menu/menu';

const Home = () => (
  <>
    <Helmet>
      <title>Khara | Home</title>
    </Helmet>
    <Menu />
    <div className="page-home">
      <Header />
    </div>
  </>
);

export default Home;

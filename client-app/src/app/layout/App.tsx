import React, { Fragment } from 'react';
import './App.css';
import { NavBar } from '../../features/nav/NavBar';
import { HomePage } from '../../features/home/HomePage';

const App: React.FC = () => {
  return (
    <Fragment>
      <NavBar />
      <HomePage />
    </Fragment>
  );
};

export default App;

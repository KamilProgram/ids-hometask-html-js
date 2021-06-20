import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import LayoutMain from './layouts/LayoutMain';

const App = () => {
  return <BrowserRouter>
    <LayoutMain />
  </BrowserRouter>
}

export default App;

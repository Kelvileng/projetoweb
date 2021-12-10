import React from 'react';
import Header from './componentes/Herder';
import Footer from './componentes/Footer';
import {BrowserRouter} from 'react-router-dom';
import  Routes from './Routes';
import './App.css';


function App(){

  

  return (
    <BrowserRouter>
      <Header />
      
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
export default App;
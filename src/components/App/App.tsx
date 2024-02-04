import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from '../Main/Main';
import  About  from '../About/About';
import Solutions from '../Solutions/Solutions';
import Methods from '../Methods/Methods'
import Ad from '../Ad/Ad';
import Reviews from '../Reviews/Reviews';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Solutions />
      <Methods />
      <Ad />
      <Reviews />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;

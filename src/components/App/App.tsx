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

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Solutions />
      <Methods />
      <Ad />
      <Reviews />
      <Feedback />
    </div>
  );
}

export default App;

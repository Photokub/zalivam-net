import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from '../Main/Main';
import  About  from '../About/About';
import Solutions from '../Solutions/Solutions';
import Methods from '../Methods/Methods'

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Solutions />
      <Methods />
    </div>
  );
}

export default App;

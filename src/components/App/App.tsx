import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from '../Main/Main';
import About from '../About/About';
import Solutions from '../Solutions/Solutions';
import Methods from '../Methods/Methods'
import Ad from '../Ad/Ad';
import Reviews from '../Reviews/Reviews';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import MethodsData from '../../data/MethodsData.json'

function App() {

  const [selectedMethod, setSelectedMethod] = useState(0)

//Методы навигации по шагам блока Methods START//
  const MethodsDataArray = MethodsData.steps

  useEffect(() => {
    console.log(selectedMethod)
  })

  const clickToNextMethod = (e: MouseEvent) => {
    setSelectedMethod(selectedMethod + 1)
  }

  const clickToPreviousMethod = (e: MouseEvent) => {
    setSelectedMethod(selectedMethod - 1)
  }
  //Методы навигации по шагам блока Methods END//



  const [windowSize, setWindowSize] = useState(getWindowSize());

  //Определение размеров окна START//
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  });

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  //Определение размеров окна END//


  return (
    <div className="App">
      <Header
        windowSize={windowSize}
      />
      {/* <Popup children={undefined} /> */}
      <Main />
      <About />
      <Solutions />
      <Methods
        MethodsDataArray={MethodsDataArray}
        clickToNextMethod={clickToNextMethod}
        clickToPreviousMethod={clickToPreviousMethod}
        selectedMethod={selectedMethod}
      />
      <Ad />
      <Reviews />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;

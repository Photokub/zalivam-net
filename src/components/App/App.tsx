import React, { useEffect, useState } from 'react';
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
import gsap from 'gsap';
import { useActionData } from 'react-router-dom';

function App() {

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [disableBackButton, setDisableBackButon] = useState(true);
  const [disableNextButton, setDisableNextButon] = useState(false);
  const [stepCardsArray, setStepCardsArray] = useState<Element[]>([]);
  const [nextBtn, setNextBtn] = useState<any>({});
  const [backBtn, setBackBtn] = useState<any>({});
  const [cardCheckMarksArray, setCardCheckMarksArray] = useState<any>([]);
  const [selectedSolution, setSelectedSolution] = useState<number>(0)

  //Методы навигации по шагам блока Methods START//
  const MethodsDataArray = MethodsData.steps
  console.log(MethodsDataArray)

  useEffect(() => {
    console.log(selectedMethod)
    selectedMethod <= 0 ? setDisableBackButon(true) : setDisableBackButon(false);
    selectedMethod >= MethodsDataArray.length - 1 ? setDisableNextButon(true) : setDisableNextButon(false);
  })

  const clickToNextMethod = (e: MouseEvent) => {
    setSelectedMethod(selectedMethod + 1)
  }

  const clickToPreviousMethod = (e: MouseEvent) => {
    setSelectedMethod(selectedMethod - 1)
  }

  useEffect(() => {
    const stepCards = document.querySelectorAll(".stepCard")
    const checkMarks = document.querySelectorAll(".stepCard__checkmark")
    const nextButton = document.querySelector("#nextBtn")
    const backButton = document.querySelector("#backBtn")
    const stepCardsArr = Array.from(stepCards)
    const cardCheckMarksArr = Array.from(checkMarks)
    setNextBtn(nextButton)
    setBackBtn(backButton)
    setStepCardsArray(stepCardsArr)
    setCardCheckMarksArray(cardCheckMarksArr)
    console.log(cardCheckMarksArray)
  }, [])

  useEffect(() => {
    nextBtn.disabled = disableNextButton
    backBtn.disabled = disableBackButton
    setDisabledStyle(nextBtn)
    setDisabledStyle(backBtn)
    stepCardsArray.forEach(card => {
      stepCardsArray.indexOf(card) === selectedMethod ? card.classList.add("stepCard_active") : card.classList.remove("stepCard_active");
      stepCardsArray.indexOf(card) < selectedMethod ? card.classList.add("stepCard_checked") : card.classList.remove("stepCard_checked");
    })

    cardCheckMarksArray.forEach((item: any) => {
      cardCheckMarksArray.indexOf(item) <= selectedMethod ? (item.style.display = "block") : (item.style.display = "none")
    })
  })

  function setDisabledStyle(item: any) {
    if (item.style != undefined) {
      if (item.disabled) {
        item.style.opacity = .4
      } else {
        item.style.opacity = 1
      }
    }
  }

  const handleAnimationNextBtn = () => {
    gsap.fromTo(".methodFocus", { opacty: 0, x: -25 }, { opacty: 1, x: 0 })
  };

  const handleAnimationBackBtn = () => {
    gsap.fromTo(".methodFocus", { opacty: 0, x: 25 }, { opacty: 1, x: 0 })
  };
  
  //Методы навигации по шагам блока Methods END//

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


  //Универсальные методы галерей START//
  function сlickCarouselForward(
    e: MouseEvent,
    targetItem: number,
    targetItemSetMethod: React.Dispatch<React.SetStateAction<number>>,
  ) {
    targetItemSetMethod(targetItem + 1)
    console.log(targetItem)
  }

  function сlickCarouselBack(
    e: MouseEvent,
    targetItem: number,
    targetItemSetMethod: React.Dispatch<React.SetStateAction<number>>,
  ) {
    targetItemSetMethod(targetItem - 1)
    console.log(targetItem)
  }

  const handleClickCarouselForward = (e: MouseEvent) => сlickCarouselForward(
    e,
    selectedSolution,
    setSelectedSolution
  )

  const handleClickCarouselBack = (e: MouseEvent) => сlickCarouselBack(
    e,
    selectedSolution,
    setSelectedSolution
  )

  //Универсальные методы галерей END//


  return (
    <div className="App">
      <Header
        windowSize={windowSize}
      />
      {/* <Popup children={undefined} /> */}
      <Main />
      <About />
      <Solutions
        handleClickCarouselForward={handleClickCarouselForward}
        handleClickCarouselBack={handleClickCarouselBack}
      />
      <Methods
        MethodsDataArray={MethodsDataArray}
        clickToNextMethod={clickToNextMethod}
        clickToPreviousMethod={clickToPreviousMethod}
        selectedMethod={selectedMethod}
        handleAnimationNextBtn={handleAnimationNextBtn}
        handleAnimationBackBtn={handleAnimationBackBtn}
      />
      <Ad />
      <Reviews
        handleClickCarouselForward={handleClickCarouselForward}
        handleClickCarouselBack={handleClickCarouselBack}
      />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;

import React, { useCallback, useEffect, useState } from 'react';
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
import MethodsData from '../../data/MethodsData.json';
import ReviewsData from "../../data/ReviewsData"
import { api } from "../../utils/Api.js";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger"
import solutionsData from "../../data/SolutionsData"
import { useActionData } from 'react-router-dom';
import Agreement from '../Agreement/Agreement';
import PopupWithCBForm from '../PopupWithCBForm/PopupWithCBForm';
import reviewsData from '../../data/ReviewsData';

function App() {

  const [headerElement, setHeaderElement] = useState<any>({})
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [headerTopValue, setHeaderTopValue] = useState()
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [disableBackButton, setDisableBackButon] = useState(true);
  const [disableNextButton, setDisableNextButon] = useState(false);
  const [disableBackReviewButton, setDisableBackReviewButton] = useState(true);
  const [disableNextReviewButton, setDisableNextReviewButton] = useState(false);
  const [stepCardsArray, setStepCardsArray] = useState<Element[]>([]);
  const [reviewCardsArray, setReviewCardsArray] = useState<Element[]>([]);
  const [nextBtn, setNextBtn] = useState<any>({});
  const [backBtn, setBackBtn] = useState<any>({});
  const [nextReviewBtn, setNextReviewBtn] = useState<any>({});
  const [backReviewBtn, setBackReviewBtn] = useState<any>({});
  const [cardCheckMarksArray, setCardCheckMarksArray] = useState<any>([]);
  const [docCardsArray, setDocCardsArray] = useState<Element[]>([]);
  const [selectedSolution, setSelectedSolution] = useState<number>(0);
  const [selectedReview, setSelectedReview] = useState<number>(1);
  const [nextSolutionBtn, setNextSolutionBtn] = useState<any>({});
  const [backSolutionBtn, setBackSolutionBtn] = useState<any>({});
  const [disableBackSolutionButton, setDisableBackSolutionButon] = useState(true);
  const [disableNextSolutionButton, setDisableNextSolutionButon] = useState(false);
  const [selectedSolutionImagesArray, setSelectedSolutionImagesArray] = useState<string[]>([]);
  const [selectedSolutionImage, setSelectedSolutionImage] = useState<number>(0);
  const [nextSolutionImageBtn, setNextSolutionImageBtn] = useState<any>({});
  const [backSolutionImageBtn, setBackSolutionImageBtn] = useState<any>({});
  const [disableBackSolutionImageButton, setDisableBackSolutionImageButton] = useState(true);
  const [disableNextSolutionImageButton, setDisableNextSolutionImageButton] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isCBPopupOpen, setIsCBPopupOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [isSucsess, setIsSucsess] = useState(true)
  const MethodsDataArray = MethodsData.steps
  const popupSolution = document.querySelector<HTMLElement>(".popup");
  const selectedSolutionData = solutionsData[selectedSolution]
  const bodyElement = document.querySelector("body")
  const agreementPopup = document.querySelector(".agreement")
  const popupWithCBForm = document.querySelector(".popup-with-CB-form")


  const Data = new Date()

  //отправка сообщений START//

  const sendFeedbackMessage = useCallback(async ({
    name,
    email,
    message
  }: { name: string, email: string, message: string }) => {
    try {
      setIsLoading(true)
      const messageData = await api.sendMessage({ name, email, message });
      if (!messageData) {
        handleSendMessage()
        setIsSucsess(false)
        console.log(isSucsess)
        console.log("Сообщение не отправлено")
      }
      handleSendMessage()
      setIsSucsess(true)
      console.log(isSent)
      console.log(`Сообщение ${message} успешно отправлено`)
    } catch (err) {
      handleSendMessage()
      setIsSucsess(false)
      console.error(err)
    } finally {
      setTimeout(() => {
        setIsSent(false)
      }, 8000)
      setIsLoading(false)
    }
  }, [])

  const handleSendMessage = () => {
    setIsSent(true)
    setTimeout(() => {
      setIsSent(false)
    }, 5000)
  }
  //отправка сообщений END//

  //заказать звонок START//
  const sendCBMessage = useCallback(async ({
    name,
    phone,
  }: { name: string, phone: string }) => {
    try {
      setIsLoading(true)
      const CBData = await api.sendCallBackMessage({ name, phone });
      if (!CBData) {
        handleSendMessage()
        setIsSucsess(false)
      }
      handleSendMessage()
      setIsSucsess(true)
    } catch (err) {
      handleSendMessage()
      setIsSucsess(false)
      console.error(err)
    } finally {
      setTimeout(() => {
        setIsSent(false)
      }, 8000)
      setIsLoading(false)
    }
  }, [])

  // const handleSend = () => {
  //   setIsSent(true)
  //   setTimeout(() => {
  //     setIsSent(false)
  //   }, 5000)
  // }
  //заказать звонок END//



  //логика Header START//

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement;
    setHeaderElement(header)
  }, [])

  const headerTop = headerElement.offsetTop

  function headerTopFix() {
    if (window.scrollY >= headerTop) {
      headerElement.classList.add("header_sticky");
    } else {
      headerElement.classList.remove("header_sticky");
    }
  }

  window.onscroll = function () { headerTopFix() };

  //логика Header END//


  //Методы навигации по шагам блока Methods START//

  useEffect(() => {
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

  //Универсальные методы галерей END//

  //навигация по галерее Solutions START//
  useEffect(() => {
    selectedSolution == 0 ? setDisableBackSolutionButon(true) : setDisableBackSolutionButon(false);
    selectedSolution >= docCardsArray.length - 1 ? setDisableNextSolutionButon(true) : setDisableNextSolutionButon(false);
    selectedSolutionImage === 0 ? setDisableBackSolutionImageButton(true) : setDisableBackSolutionImageButton(false);
    selectedSolutionImage === selectedSolutionImagesArray.length - 1 ? setDisableNextSolutionImageButton(true) : setDisableNextSolutionImageButton(false);
  })

  useEffect(() => {
    const nextSolutionButton = document.querySelector("#nextSolutionBtn")
    const backSolutionButton = document.querySelector("#backSolutionBtn")
    const nextSolutionImageButton = document.querySelector("#nextSolutionImageBtn")
    const backSolutionImageButton = document.querySelector("#backSolutionImageBtn")
    setNextSolutionBtn(nextSolutionButton)
    setBackSolutionBtn(backSolutionButton)
    setNextSolutionImageBtn(nextSolutionImageButton)
    setBackSolutionImageBtn(backSolutionImageButton)
  }, [])

  useEffect(() => {
    const DocCards = document.querySelectorAll(".docCard")
    const docCardsArr = Array.from(DocCards)
    const selectedImagesArray = selectedSolutionData.image
    setSelectedSolutionImagesArray(selectedImagesArray)
    setDocCardsArray(docCardsArr)
  }, [selectedSolution])


  useEffect(() => {
    nextSolutionBtn.disabled = disableNextSolutionButton
    backSolutionBtn.disabled = disableBackSolutionButton
    setDisabledStyle(nextSolutionBtn)
    setDisabledStyle(backSolutionBtn)
    nextSolutionImageBtn.disabled = disableNextSolutionImageButton
    backSolutionImageBtn.disabled = disableBackSolutionImageButton
    setDisabledStyle(nextSolutionImageBtn)
    setDisabledStyle(backSolutionImageBtn)
    if (bodyElement != null || bodyElement != undefined) {
      { isPopupOpen || isCBPopupOpen ? bodyElement.style.overflow = "hidden" : bodyElement.style.overflow = "auto" }
    }
    if (popupSolution != null || popupSolution != undefined) {
      { isPopupOpen ? popupSolution.style.overflow = "auto" : popupSolution.style.overflow = "hidden" }
    }
  })


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

  const handleAnimationNextSolutionBtn = () => {
    gsap.fromTo(".docCard__image", { opacty: 0, x: 55 }, { opacty: 1, x: 0 })
  };

  const handleAnimationBackSolutionBtn = () => {
    gsap.fromTo(".docCard__image", { opacty: 0, x: -55 }, { opacty: 1, x: 0 })
  };


  const handleClickSolutionImageForward = (e: MouseEvent) => сlickCarouselForward(
    e,
    selectedSolutionImage,
    setSelectedSolutionImage
  )

  const handleClickSolutionImageBack = (e: MouseEvent) => сlickCarouselBack(
    e,
    selectedSolutionImage,
    setSelectedSolutionImage
  )

  function openPopupSolution(e: MouseEvent) {
    popupSolution?.classList.add("popup_visible")
    setIsPopupOpen(true)
  }

  function closePopupSolution(e: MouseEvent) {
    popupSolution?.classList.remove("popup_visible")
    setIsPopupOpen(false)
    setSelectedSolutionImage(0)
    setSelectedSolutionImagesArray([])
  }
  //навигация по галерее Solutions END//

  //логика блока Reviews START//
  useEffect(() => {
    const reviewCards = document.querySelectorAll(".reviewCard")
    const nextReviewButton = document.querySelector("#nextReviewBtn")
    const backReviewButton = document.querySelector("#backReviewBtn")
    const reviewCardsArr = Array.from(reviewCards)
    setNextReviewBtn(nextReviewButton)
    setBackReviewBtn(backReviewButton)  
  }, [])

  // console.log(ReviewsData.length)

  useEffect(() => {
    selectedReview <= 0 ? setDisableBackReviewButton(true) : setDisableBackReviewButton(false);
    selectedReview >= ReviewsData.length - 1 ? setDisableNextReviewButton(true) : setDisableNextReviewButton(false);
    nextReviewBtn.disabled = disableNextReviewButton
    backReviewBtn.disabled = disableBackReviewButton
    setDisabledStyle(nextReviewBtn)
    setDisabledStyle(backReviewBtn)
  })

  const clickToNextReview = (e: MouseEvent) => {
    setSelectedReview(selectedReview + 1)
    console.log(selectedReview)
  }

  const clickToPreviousReview = (e: MouseEvent) => {
    setSelectedReview(selectedReview - 1)
    console.log(selectedReview)

  }

  //логика блока Revires END//

  //общие методы попапов START//

  function openPopup(e: MouseEvent, currentPopupElement: any, classNamePart: string) {
    currentPopupElement?.classList.add(`${classNamePart}_visible`)
    setIsPopupOpen(true)
  }

  function closePopup(e: MouseEvent, currentPopupElement: any, classNamePart: string) {
    currentPopupElement?.classList.remove(`${classNamePart}_visible`)
    setIsPopupOpen(false)
  }

  //общие методы попапов END//


  return (
    <div className="App">
      <Header
        windowSize={windowSize}
      />
      <Agreement
        closePopup={closePopup}
      />
      <PopupWithCBForm
        closePopup={closePopup}
        popupWithCBForm={popupWithCBForm}
        sendCBMessage={sendCBMessage}
        isLoading={isLoading}
        isSent={isSent}
        isSucsess={isSucsess}
        openPopup={openPopup}
        agreementPopup={agreementPopup}
        setIsCBPopupOpen={setIsCBPopupOpen}
      />
      <Popup
        closePopupSolution={closePopupSolution}
        selectedSolution={selectedSolution}
        selectedSolutionData={selectedSolutionData}
        selectedSolutionImage={selectedSolutionImage}
        children={undefined}
        handleClickSolutionImageForward={handleClickSolutionImageForward}
        handleClickSolutionImageBack={handleClickSolutionImageBack}
      />
      <Main
        openPopup={openPopup}
        popupWithCBForm={popupWithCBForm}
        setIsCBPopupOpen={setIsCBPopupOpen}

      />
      <About />
      <Solutions
        SolutionsArray={solutionsData}
        handleClickCarouselForward={handleClickCarouselForward}
        handleClickCarouselBack={handleClickCarouselBack}
        selectedSolution={selectedSolution}
        handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
        handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
        openPopupSolution={openPopupSolution}
      />
      <Methods
        MethodsDataArray={MethodsDataArray}
        clickToNextMethod={clickToNextMethod}
        clickToPreviousMethod={clickToPreviousMethod}
        selectedMethod={selectedMethod}
        handleAnimationNextBtn={handleAnimationNextBtn}
        handleAnimationBackBtn={handleAnimationBackBtn}
      />
      <Ad
        sendFeedbackMessage={sendFeedbackMessage}
        isLoading={isLoading}
        isSent={isSent}
        isSucsess={isSucsess}
        openPopup={openPopup}
        agreementPopup={agreementPopup}
      />
      <Reviews
        clickToNextReview={clickToNextReview}
        clickToPreviousReview={clickToPreviousReview}
        handleClickCarouselForward={handleClickCarouselForward}
        handleClickCarouselBack={handleClickCarouselBack}
        handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
        handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
        reviewCardsArray={reviewCardsArray}
        reviewsArray={ReviewsData}
        selectedReview={selectedReview}
      />
      <Feedback
        sendFeedbackMessage={sendFeedbackMessage}
        isLoading={isLoading}
        isSent={isSent}
        isSucsess={isSucsess}
        openPopup={openPopup}
        agreementPopup={agreementPopup}
      />
      <Footer
        Data={Data}
      />
    </div>
  );
}

export default App;

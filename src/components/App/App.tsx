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
import ScrollTrigger from "gsap/ScrollTrigger"
import solutionsData from "../../data/SolutionsData"
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
  const [docCardsArray, setDocCardsArray] = useState<Element[]>([]);
  const [selectedSolution, setSelectedSolution] = useState<number>(0);
  const [nextSolutionBtn, setNextSolutionBtn] = useState<any>({});
  const [backSolutionBtn, setBackSolutionBtn] = useState<any>({});
  const [disableBackSolutionButton, setDisableBackSolutionButon] = useState(true);
  const [disableNextSolutionButton, setDisableNextSolutionButon] = useState(false);
  const ScrollTriggerObject: any = ScrollTrigger


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

  //навигация по галерее Solutions START//
  useEffect(() => {    
    selectedSolution <= 0 ? setDisableBackSolutionButon(true) : setDisableBackSolutionButon(false);
    selectedSolution >= docCardsArray.length - 1 ? setDisableNextSolutionButon(true) : setDisableNextSolutionButon(false);
  })

  useEffect(() => {
    const DocCards = document.querySelectorAll(".docCard")
    const nextSolutionButton = document.querySelector("#nextSolutionBtn")
    const backSolutionButton = document.querySelector("#backSolutionBtn")
    const docCardsArr = Array.from(DocCards)
    setNextSolutionBtn(nextSolutionButton)
    setBackSolutionBtn(backSolutionButton)
    setDocCardsArray(docCardsArr)
    console.log(docCardsArr)
  }, [])

  
  useEffect(() => {
    nextSolutionBtn.disabled = disableNextSolutionButton
    backSolutionBtn.disabled = disableBackSolutionButton
    setDisabledStyle(nextSolutionBtn)
    setDisabledStyle(backSolutionBtn)
  })

  const handleAnimationNextSolutionBtn = () => {
    gsap.fromTo(".docCard__image", { opacty: 0, x: -55 }, { opacty: 1, x: 0 })
  };

  const handleAnimationBackSolutionBtn = () => {
    gsap.fromTo(".docCard__image", { opacty: 0, x: 55 }, { opacty: 1, x: 0 })
  };

  //навигация по галерее Solutions END//


  //галерея GSAP START//
  // gsap.registerPlugin(ScrollTrigger);

  // let iteration = 0; // повторяется, когда мы прокручиваем до конца или начинаем и оборачиваемся - позволяет нам плавно продолжить прокрутку курсора воспроизведения в правильном направлении.

  // const spacing = 0.1,    // расстояние между картами (в шахматном порядке)
  //   snap = gsap.utils.snap(spacing), // мы будем использовать это, чтобы привязать курсор воспроизведения к бесшовному циклу
  //   cards = gsap.utils.toArray('.docCard'),
  //   seamlessLoop = buildSeamlessLoop(cards, spacing),
  //   scrub = gsap.to(seamlessLoop, { //мы повторно используем эту анимацию, чтобы плавно перемещать точку воспроизведения в бесшовном цикле.
  //     totalTime: 0,
  //     duration: 0.5,
  //     ease: "power3",
  //     paused: true
  //   }),
  //   trigger = ScrollTriggerObject.create({
  //     start: 0,
  //     onUpdate(self: any) {
  //       if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
  //         wrapForward(self);
  //       } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
  //         wrapBackward(self);
  //       } else {
  //         scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration());
  //         scrub.invalidate().restart(); // чтобы повысить производительность, мы просто делаем недействительным и перезапускаем ту же анимацию. Нет необходимости перезаписывать или создавать новую анимацию при каждом обновлении.
  //         self.wrapping = false;
  //       }
  //     },
  //     end: "+=3000",
  //     pin: ".gallery"
  //   });

  // function wrapForward(trigger: any) { // когда ScrollTrigger достигнет конца, плавно вернитесь к началу
  //   iteration++;
  //   trigger.wrapping = true;
  //   trigger.scroll(trigger.start + 1);
  // }

  // function wrapBackward(trigger: any) { // когда ScrollTrigger снова достигает начала (в обратном направлении), плавно возвращается к концу
  //   iteration--;
  //   if (iteration < 0) { // чтобы курсор воспроизведения не остановился в начале, мы перескакиваем на 10 итераций вперед
  //     iteration = 9;
  //     seamlessLoop.totalTime(seamlessLoop.totalTime() + seamlessLoop.duration() * 10);
  //     scrub.pause(); //в противном случае он может обновить totalTime непосредственно перед обновлением триггера, в результате чего начальное значение будет отличаться от того, которое мы только что установили выше.
  //   }
  //   trigger.wrapping = true;
  //   trigger.scroll(trigger.end - 1);
  // }

  // function scrubTo(totalTime: any) { // перемещает позицию прокрутки в место, соответствующее значению totalTime бесшовного цикла, и при необходимости выполняет перенос.
  //   let progress = (totalTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
  //   if (progress > 1) {
  //     wrapForward(trigger);
  //   } else if (progress < 0) {
  //     wrapBackward(trigger);
  //   } else {
  //     trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
  //   }
  // }

  // document.querySelector(".carouselNav__button_next")?.addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));
  // document.querySelector(".carouselNav__button_prev")?.addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));




  // function buildSeamlessLoop(items: any, spacing: any) {
  //   let overlap = Math.ceil(1 / spacing), // количество ДОПОЛНИТЕЛЬНЫХ анимаций по обе стороны от начала/конца для обеспечения плавного зацикливания
  //     startTime = items.length * spacing + 0.5, // время в rawSequence, с которого мы начнем плавный цикл
  //     loopTime = (items.length + overlap) * spacing + 1, // место в конце, где мы возвращаемся к началу времени
  //     rawSequence = gsap.timeline({ paused: true }), // здесь живут все «настоящие» анимации
  //     seamlessLoop = gsap.timeline({ // это просто очищает точку воспроизведения rawSequence, чтобы казалось, что она плавно зацикливается
  //       paused: true,
  //       repeat: -1, // для обеспечения бесконечной прокрутки/цикла
  //       onRepeat() { // работает вокруг очень редкой ошибки, исправленной в GSAP 3.6.1.
  //         this._time === this._dur && (this._tTime += this._dur - 0.01);
  //       }
  //     }),
  //     l = items.length + overlap * 2,
  //     time = 0,
  //     i, index, item;

  //   // установить начальное состояние элементов
  //   gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

  //   // теперь пройдите по циклу и создайте все анимации в шахматном порядке. Помните, что в конце мы должны создать ДОПОЛНИТЕЛЬНЫЕ анимации, чтобы обеспечить плавное зацикливание.
  //   for (i = 0; i < l; i++) {
  //     index = i % items.length;
  //     item = items[index];
  //     time = i * spacing;
  //     rawSequence.fromTo(item, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false }, time)
  //       .fromTo(item, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, time);
  //     i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
  //   }

  //   // здесь мы настраиваем очистку курсора воспроизведения, чтобы он выглядел плавно.
  //   rawSequence.time(startTime);
  //   seamlessLoop.to(rawSequence, {
  //     time: loopTime,
  //     duration: loopTime - startTime,
  //     ease: "none"
  //   }).fromTo(rawSequence, { time: overlap * spacing + 1 }, {
  //     time: startTime,
  //     duration: startTime - (overlap * spacing + 1),
  //     immediateRender: false,
  //     ease: "none"
  //   });
  //   return seamlessLoop;
  // }

  //галерея GSAP END// 


  return (
    <div className="App">
      <Header
        windowSize={windowSize}
      />
      {/* <Popup children={undefined} /> */}
      <Main />
      <About />
      <Solutions
        SolutionsArray={solutionsData}
        handleClickCarouselForward={handleClickCarouselForward}
        handleClickCarouselBack={handleClickCarouselBack}
        selectedSolution={selectedSolution}
        handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
        handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
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
        handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
        handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
      />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;

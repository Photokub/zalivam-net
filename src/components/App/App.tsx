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
  const [selectedSolution, setSelectedSolution] = useState<number>(0);
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


  //галерея GSAP START//
  gsap.registerPlugin(ScrollTrigger);

  let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

  const spacing = 0.1,    // spacing of the cards (stagger)
    snap = gsap.utils.snap(spacing), // we'll use this to snap the playhead on the seamlessLoop
    cards = gsap.utils.toArray('.docCard'),
    seamlessLoop = buildSeamlessLoop(cards, spacing),
    scrub = gsap.to(seamlessLoop, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
      totalTime: 0,
      duration: 0.5,
      ease: "power3",
      paused: true
    }),
    trigger = ScrollTriggerObject.create({
      start: 0,
      onUpdate(self: any) {
        if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
          wrapForward(self);
        } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
          wrapBackward(self);
        } else {
          scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration());
          scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
          self.wrapping = false;
        }
      },
      end: "+=3000",
      pin: ".gallery"
    });

  function wrapForward(trigger: any) { // when the ScrollTrigger reaches the end, loop back to the beginning seamlessly
    iteration++;
    trigger.wrapping = true;
    trigger.scroll(trigger.start + 1);
  }

  function wrapBackward(trigger: any) { // when the ScrollTrigger reaches the start again (in reverse), loop back to the end seamlessly
    iteration--;
    if (iteration < 0) { // to keep the playhead from stopping at the beginning, we jump ahead 10 iterations
      iteration = 9;
      seamlessLoop.totalTime(seamlessLoop.totalTime() + seamlessLoop.duration() * 10);
      scrub.pause(); // otherwise it may update the totalTime right before the trigger updates, making the starting value different than what we just set above. 
    }
    trigger.wrapping = true;
    trigger.scroll(trigger.end - 1);
  }

  function scrubTo(totalTime: any) { // moves the scroll position to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
    let progress = (totalTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
    if (progress > 1) {
      wrapForward(trigger);
    } else if (progress < 0) {
      wrapBackward(trigger);
    } else {
      trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
    }
  }

  document.querySelector(".carouselNav__button_next")?.addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));
  document.querySelector(".carouselNav__button_prev")?.addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));




  function buildSeamlessLoop(items: any, spacing: any) {
    let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
      startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
      loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime 
      rawSequence = gsap.timeline({ paused: true }), // this is where all the "real" animations live
      seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
        paused: true,
        repeat: -1, // to accommodate infinite scrolling/looping
        onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
          this._time === this._dur && (this._tTime += this._dur - 0.01);
        }
      }),
      l = items.length + overlap * 2,
      time = 0,
      i, index, item;

    // set initial state of items
    gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

    // now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
    for (i = 0; i < l; i++) {
      index = i % items.length;
      item = items[index];
      time = i * spacing;
      rawSequence.fromTo(item, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false }, time)
        .fromTo(item, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, time);
      i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
    }

    // here's where we set up the scrubbing of the playhead to make it appear seamless. 
    rawSequence.time(startTime);
    seamlessLoop.to(rawSequence, {
      time: loopTime,
      duration: loopTime - startTime,
      ease: "none"
    }).fromTo(rawSequence, { time: overlap * spacing + 1 }, {
      time: startTime,
      duration: startTime - (overlap * spacing + 1),
      immediateRender: false,
      ease: "none"
    });
    return seamlessLoop;
  }

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

import React from "react";
import "./CarouselNav.css"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface CarouselNavPropTypes {
    handleAnimationNextSolutionBtn: any,
    handleAnimationBackSolutionBtn: any,
    handleClickCarouselForward: (e: any) => void,
    handleClickCarouselBack: (e: any) => void,
}

const CarouselNav: React.FC<CarouselNavPropTypes> = ({
    handleClickCarouselForward,
    handleClickCarouselBack,
    handleAnimationNextSolutionBtn,
    handleAnimationBackSolutionBtn
}) => {

    const handleClickNext = (e: any) => {
        handleClickCarouselForward(e)
        handleAnimationNextSolutionBtn(e)
    }

    const handleClickBack = (e: any) => {
        handleClickCarouselBack(e)
        handleAnimationBackSolutionBtn(e)
    }

    return (
        <div className="carouselNav">
            <button id="backSolutionBtn" className="carouselNav__button carouselNav__button_next" type="button" onClick={(e) => handleClickBack(e)}><FaLongArrowAltLeft className="carouselNav__arrow" /></button>
            <button id="nextSolutionBtn" className="carouselNav__button carouselNav__button_prev" type="button" onClick={(e) => handleClickNext(e)}><FaLongArrowAltRight className="carouselNav__arrow" /></button>
        </div>
    )
}

export default CarouselNav;
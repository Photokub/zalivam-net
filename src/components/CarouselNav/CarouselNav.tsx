import React from "react";
import "./CarouselNav.css"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface CarouselNavPropTypes {
    handleClickCarouselForward: (e: any) => void,
    handleClickCarouselBack: (e: any) => void
}

const CarouselNav: React.FC<CarouselNavPropTypes> = ({
    handleClickCarouselForward,
    handleClickCarouselBack
}) => {
    return (
        <div className="carouselNav">
            <button className="carouselNav__button carouselNav__button_next" type="button" onClick={(e) => handleClickCarouselBack(e)}><FaLongArrowAltLeft className="carouselNav__arrow" /></button>
            <button className="carouselNav__button carouselNav__button_prev" type="button" onClick={(e) => handleClickCarouselForward(e)}><FaLongArrowAltRight className="carouselNav__arrow" /></button>
        </div>
    )
}

export default CarouselNav;
import React from "react";
import "./CarouselNav.css"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface CarouselNavPropTypes {

}

const CarouselNav: React.FC<CarouselNavPropTypes> = ({ }) => {
    return (
        <div className="carouselNav">
            <FaLongArrowAltLeft className="carouselNav__arrow" />
            <FaLongArrowAltRight className="carouselNav__arrow" />
        </div>
    )
}

export default CarouselNav;
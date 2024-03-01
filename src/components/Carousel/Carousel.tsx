import React from "react";
import './Carousel.css';
import DocCard from "../DocCard/DocCard";
import CarouselNav from "../CarouselNav/CarouselNav";

interface CarouselPropTypes {
    handleClickCarouselForward: (e: MouseEvent) => void,
    handleClickCarouselBack: (e: MouseEvent) => void
}

const Carousel: React.FC<CarouselPropTypes> = ({
    handleClickCarouselForward,
    handleClickCarouselBack
}) => {
    return (
        <div className='carousel'>
            <DocCard />
            <CarouselNav
                handleClickCarouselForward={handleClickCarouselForward}
                handleClickCarouselBack={handleClickCarouselBack}
            />
        </div>
    )
}

export default Carousel
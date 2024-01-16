import React from "react";
import './Carousel.css';
import DocCard from "../DocCard/DocCard";
import CarouselNav from "../CarouselNav/CarouselNav";

interface CarouselPropTypes {

}

const Carousel: React.FC<CarouselPropTypes> = ({ }) => {
    return (
        <div className='carousel'>
            <DocCard/>
            <CarouselNav/>
        </div>
    )
}

export default Carousel
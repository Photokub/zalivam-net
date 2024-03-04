import React from "react";
import './Carousel.css';
import DocCard from "../DocCard/DocCard";
import CarouselNav from "../CarouselNav/CarouselNav";

interface CarouselPropTypes {
    selectedSolution: any,
    handleClickCarouselForward: (e: MouseEvent) => void,
    handleClickCarouselBack: (e: MouseEvent) => void,
    SolutionsArray: any,
}

const Carousel: React.FC<CarouselPropTypes> = ({
    handleClickCarouselForward,
    handleClickCarouselBack,
    SolutionsArray,
    selectedSolution
}) => {
    return (
        <div className='carousel'>
            {
                SolutionsArray.map((card: any, id: number) =>
                    <DocCard key={id}
                        id={card.id}
                        name={card.name}
                        cause={card.cause}
                        solution={card.solution}
                        link={card.link}
                        image={card.image}    
                        selectedSolution={selectedSolution}                    
                    />
                )
            }
            <CarouselNav
                handleClickCarouselForward={handleClickCarouselForward}
                handleClickCarouselBack={handleClickCarouselBack}
            />
        </div>
    )
}

export default Carousel
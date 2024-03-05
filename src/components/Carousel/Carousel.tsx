import React from "react";
import './Carousel.css';
import DocCard from "../DocCard/DocCard";
import CarouselNav from "../CarouselNav/CarouselNav";

interface CarouselPropTypes {
    handleAnimationNextSolutionBtn: any,
    handleAnimationBackSolutionBtn: any,
    selectedSolution: any,
    handleClickCarouselForward: (e: MouseEvent) => void,
    handleClickCarouselBack: (e: MouseEvent) => void,
    SolutionsArray: any,
    openPopupSolution: (e: MouseEvent)=>void,
}

const Carousel: React.FC<CarouselPropTypes> = ({
    handleClickCarouselForward,
    handleClickCarouselBack,
    SolutionsArray,
    selectedSolution,
    handleAnimationNextSolutionBtn,
    handleAnimationBackSolutionBtn,
    openPopupSolution,
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
                        openPopupSolution={openPopupSolution}
                    />
                )
            }
            <CarouselNav
                handleClickCarouselForward={handleClickCarouselForward}
                handleClickCarouselBack={handleClickCarouselBack}
                handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
                handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
            />
        </div>
    )
}

export default Carousel
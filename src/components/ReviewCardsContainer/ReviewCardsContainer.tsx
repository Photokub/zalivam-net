import React from "react";
import "./ReviewCardsContainer.css"
import ReviewCard from "../ReviewCard/ReviewCard";
import CarouselNav from "../CarouselNav/CarouselNav";

interface ReviewCardsContainer {
    handleAnimationNextSolutionBtn: any,
    handleAnimationBackSolutionBtn: any,
    handleClickCarouselForward: (e: MouseEvent) => void,
    handleClickCarouselBack: (e: MouseEvent) => void
}

const ReviewCardsContainer: React.FC<ReviewCardsContainer> = ({
    handleClickCarouselForward,
    handleClickCarouselBack,
    handleAnimationNextSolutionBtn,
    handleAnimationBackSolutionBtn
}) => {
    return (
        <div className="ReviewContainer">
            <div className="ReviewCardsContainer">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
            <CarouselNav
                handleClickCarouselForward={handleClickCarouselForward}
                handleClickCarouselBack={handleClickCarouselBack}
                handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
                handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
            />
        </div>
    )
}

export default ReviewCardsContainer;
import React from "react";
import "./ReviewCardsContainer.css"
import ReviewCard from "../ReviewCard/ReviewCard";
import CarouselNav from "../CarouselNav/CarouselNav";

interface ReviewCardsContainer {
    handleClickCarouselForward: (e: MouseEvent) => void,
    handleClickCarouselBack: (e: MouseEvent) => void
}

const ReviewCardsContainer: React.FC<ReviewCardsContainer> = ({
    handleClickCarouselForward,
    handleClickCarouselBack
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
            />
        </div>
    )
}

export default ReviewCardsContainer;
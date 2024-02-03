import React from "react";
import "./ReviewCardsContainer.css"
import ReviewCard from "../ReviewCard/ReviewCard";
import CarouselNav from "../CarouselNav/CarouselNav";

interface ReviewCardsContainer {

}

const ReviewCardsContainer: React.FC<ReviewCardsContainer> = ({ }) => {
    return (
        <div className="ReviewContainer">
            <div className="ReviewCardsContainer">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
            <CarouselNav />
        </div>
    )
}

export default ReviewCardsContainer;
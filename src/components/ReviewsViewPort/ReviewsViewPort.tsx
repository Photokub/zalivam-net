import React from "react";
import "./ReviewsViewPort.css"
import ReviewCardsContainer from "../ReviewCardsContainer/ReviewCardsContainer";

interface ReviewsViewPortPropTypes {
    reviewCardsArray: any,
    reviewsArray: any,
    handleAnimationNextSolutionBtn: any,
    handleAnimationBackSolutionBtn: any,
    handleClickCarouselForward: (e: MouseEvent) => void,
    handleClickCarouselBack: (e: MouseEvent) => void,
    clickToNextReview: any,
    clickToPreviousReview: any,
    selectedReview: number,
}

const ReviewsViewPort: React.FC<ReviewsViewPortPropTypes> = ({
    handleClickCarouselForward,
    handleClickCarouselBack,
    handleAnimationNextSolutionBtn,
    handleAnimationBackSolutionBtn,
    reviewCardsArray,
    reviewsArray,
    clickToNextReview,
    clickToPreviousReview,
    selectedReview
}) => {
    return (
        <div className="reviews__viewPort">
            <ReviewCardsContainer
                reviewCardsArray={reviewCardsArray}
                reviewsArray={reviewsArray}
                handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
                handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
                handleClickCarouselForward={handleClickCarouselForward}
                handleClickCarouselBack={handleClickCarouselBack}
                clickToNextReview={clickToNextReview}
                clickToPreviousReview={clickToPreviousReview}
                selectedReview={selectedReview}
            />
        </div>
    )
}

export default ReviewsViewPort
import React from "react";
import "./ReviewCardsContainer.css"
import ReviewCard from "../ReviewCard/ReviewCard";
import CarouselNav from "../CarouselNav/CarouselNav";
import ReviewNav from "../ReviewsNav/ReviewsNav";

interface ReviewCardsContainer {
    reviewCardsArray: any,
    reviewsArray: any,
    handleAnimationNextSolutionBtn: any,
    handleAnimationBackSolutionBtn: any,
    handleClickCarouselForward: (e: MouseEvent) => void,
    handleClickCarouselBack: (e: MouseEvent) => void,
    clickToNextReview: any,
    clickToPreviousReview: any
}

const ReviewCardsContainer: React.FC<ReviewCardsContainer> = ({
    handleClickCarouselForward,
    handleClickCarouselBack,
    handleAnimationNextSolutionBtn,
    handleAnimationBackSolutionBtn,
    reviewCardsArray,
    reviewsArray,
    clickToNextReview,
    clickToPreviousReview,
}) => {

    // console.log(reviewCardsArray)
    // console.log(reviewsArray)

    return (
        <div className="ReviewContainer">
            <div className="ReviewCardsContainer">
                {
                    reviewsArray.map((card: any, id: number) =>
                        <ReviewCard
                            key={id}
                            id={card.id}
                            text={card.reviewText}
                            author={card.reviewAuthor}
                            avatar={card.reviewAvatar}

                        />
                    )
                }
            </div>
            <ReviewNav
                clickToNextReview={clickToNextReview}
                clickToPreviousReview={clickToPreviousReview}
                handleClickCarouselForward={handleClickCarouselForward}
                handleClickCarouselBack={handleClickCarouselBack}
                handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
                handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
            />
        </div>
    )
}

export default ReviewCardsContainer;
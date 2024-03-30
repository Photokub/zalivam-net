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
    clickToPreviousReview: any,
    selectedReview: number,
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
    selectedReview
}) => {

    const centrShiftValue = ((1160 - (368*3)) / 2) / 2
    let shiftValue = (selectedReview * (368+centrShiftValue*2)) - (368+centrShiftValue*2)

    return (
        <>
            <div className="ReviewContainer">
                <div className="ReviewCardsContainer"
                    style={
                        {
                            transform: `translateX(${shiftValue < 0 ? `${shiftValue * -1}px` : `-${shiftValue}px`})`
                        }
                    }
                >
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
            </div>
            <ReviewNav
                clickToNextReview={clickToNextReview}
                clickToPreviousReview={clickToPreviousReview}
                handleClickCarouselForward={handleClickCarouselForward}
                handleClickCarouselBack={handleClickCarouselBack}
                handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
                handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
            />
        </>
    )
}

export default ReviewCardsContainer;
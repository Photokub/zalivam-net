import React from "react";
import "./Reviews.css"
import ReviewCardsContainer from "../ReviewCardsContainer/ReviewCardsContainer";
import ReviewsViewPort from "../ReviewsViewPort/ReviewsViewPort";

interface ReviewsPropTypes {
    reviewCardsArray: any,
    reviewsArray: any;
    handleAnimationNextSolutionBtn: any,
    handleAnimationBackSolutionBtn: any,
    handleClickCarouselForward: (e: MouseEvent) => void,
    handleClickCarouselBack: (e: MouseEvent) => void,
    clickToNextReview: any,
    clickToPreviousReview: any,
    selectedReview: number,
}

const Reviews: React.FC<ReviewsPropTypes> = ({
    clickToNextReview,
    clickToPreviousReview,
    handleClickCarouselForward,
    handleClickCarouselBack,
    handleAnimationNextSolutionBtn,
    handleAnimationBackSolutionBtn,
    reviewCardsArray,
    reviewsArray,
    selectedReview
}) => {
    return (
        <section className="reviews" id="reviews">
            <div className="reviews__wrap">
                <h2 className="reviews__title">Отзывы</h2>
                <div className="reviews__textContainer">
                    <p className="reviews__paragraph">Если вы хотите оставить отзыв или благодарность о нашей работе, напишите нам в форме обратной связи.</p>
                </div>
            </div>
            <ReviewCardsContainer
                clickToNextReview={clickToNextReview}
                clickToPreviousReview={clickToPreviousReview}
                reviewCardsArray={reviewCardsArray}
                reviewsArray={reviewsArray}
                handleClickCarouselForward={handleClickCarouselForward}
                handleClickCarouselBack={handleClickCarouselBack}
                handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
                handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
                selectedReview={selectedReview}
            />
            {/* <ReviewsViewPort
                            clickToNextReview={clickToNextReview}
                            clickToPreviousReview={clickToPreviousReview}
                            reviewCardsArray={reviewCardsArray}
                            reviewsArray={reviewsArray}
                            handleClickCarouselForward={handleClickCarouselForward}
                            handleClickCarouselBack={handleClickCarouselBack}
                            handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
                            handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
                            selectedReview={selectedReview}
            /> */}
        </section>
    )
}

export default Reviews;
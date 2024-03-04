import React from "react";
import "./Reviews.css"
import ReviewCardsContainer from "../ReviewCardsContainer/ReviewCardsContainer";

interface ReviewsPropTypes {
    handleAnimationNextSolutionBtn: any,
    handleAnimationBackSolutionBtn: any,
    handleClickCarouselForward: (e: MouseEvent) => void,
    handleClickCarouselBack: (e: MouseEvent) => void
}

const Reviews: React.FC<ReviewsPropTypes> = ({
    handleClickCarouselForward,
    handleClickCarouselBack,
    handleAnimationNextSolutionBtn,
    handleAnimationBackSolutionBtn
}) => {
    return (
        <section className="reviews">
            <div className="reviews__wrap">
                <h2 className="reviews__title">Отзывы</h2>
                <div className="reviews__textContainer">
                    <h4 className="reviews__subtitle">Title</h4>
                    <p className="reviews__paragraph">Lorem ipsum dolor sit amet consectetur. Suspendisse turpis faucibus in massa non in id. Vivamus rhoncus quam mi nisl dui. Sed in integer aliquet egestas dolor pellentesque.</p>
                </div>
            </div>
            <ReviewCardsContainer
                handleClickCarouselForward={handleClickCarouselForward}
                handleClickCarouselBack={handleClickCarouselBack}
                handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
                handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
            />
        </section>
    )
}

export default Reviews;
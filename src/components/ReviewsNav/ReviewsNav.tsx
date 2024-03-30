import React from "react";
import "./ReviewsNav.css"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface ReviewNavPropTypes {
    handleAnimationNextSolutionBtn: any,
    handleAnimationBackSolutionBtn: any,
    handleClickCarouselForward: (e: any) => void,
    handleClickCarouselBack: (e: any) => void,
    clickToNextReview: any,
    clickToPreviousReview: any
}

const ReviewNav: React.FC<ReviewNavPropTypes> = ({
    handleClickCarouselForward,
    handleClickCarouselBack,
    handleAnimationNextSolutionBtn,
    handleAnimationBackSolutionBtn,
    clickToNextReview,
    clickToPreviousReview,
}) => {

    const handleClickNext = (e: any) => {
        handleClickCarouselForward(e)
        handleAnimationNextSolutionBtn(e)
    }

    const handleClickBack = (e: any) => {
        handleClickCarouselBack(e)
        handleAnimationBackSolutionBtn(e)
    }

    return (
        <div className="reviewNav">
            <button id="backReviewBtn" className="reviewNav__button reviewNav__button_next" type="button" onClick={(e) => clickToNextReview(e)}><FaLongArrowAltLeft className="reviewNav__arrow" /></button>
            <button id="nextReviewBtn" className="reviewNav__button reviewNav__button_prev" type="button" onClick={(e) => clickToPreviousReview(e)}><FaLongArrowAltRight className="reviewNav__arrow" /></button>
        </div>
    )
}

export default ReviewNav;
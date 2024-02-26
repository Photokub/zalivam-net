import React, { MouseEventHandler } from "react";
import "./MethodsButtons.css"
import { BsArrowLeft } from "react-icons/bs"
import { BsArrowRight } from "react-icons/bs"
import MethodsButton from "../MethodsButton/MethodsButton";

interface MethodsButtonsPropTypes {
    clickToNextMethod: (e: MouseEvent) => void,
    clickToPreviousMethod: (e: MouseEvent) => void,
    handleAnimationNextBtn: any,
    handleAnimationBackBtn: any,
};

const MethodsButtons: React.FC<MethodsButtonsPropTypes> = ({
    clickToNextMethod,
    clickToPreviousMethod,
    handleAnimationNextBtn,
    handleAnimationBackBtn
}) => {


    return (
        <div className="methodsButtons">
            <MethodsButton
                id="backBtn"
                icon={<BsArrowLeft className="methodsButton__icon" />}
                label="Предыдущий шаг"
                buttonClass="methodsButton methodsButton__back"
                clickToNextMethod={clickToNextMethod}
                clickToPreviousMethod={clickToPreviousMethod}
                handleAnimationNextBtn={handleAnimationNextBtn}
                handleAnimationBackBtn={handleAnimationBackBtn}
            />
            <MethodsButton
                id="nextBtn"
                icon={<BsArrowRight className="methodsButton__icon" />}
                label="Следующий шаг"
                buttonClass="methodsButton methodsButton__next"
                clickToNextMethod={clickToNextMethod}
                clickToPreviousMethod={clickToPreviousMethod}
                handleAnimationNextBtn={handleAnimationNextBtn}
                handleAnimationBackBtn={handleAnimationBackBtn}
            />
        </div>
    )
}

export default MethodsButtons;
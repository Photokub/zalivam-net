import React, { MouseEventHandler } from "react";
import "./MethodsButtons.css"
import { BsArrowLeft } from "react-icons/bs"
import { BsArrowRight } from "react-icons/bs"
import MethodsButton from "../MethodsButton/MethodsButton";

interface MethodsButtonsPropTypes {
    clickToNextMethod: (e: MouseEvent) => void,
    clickToPreviousMethod: (e: MouseEvent) => void,
    // disableBackButton: boolean,
    // disableNextButton: boolean
};

const MethodsButtons: React.FC<MethodsButtonsPropTypes> = ({
    clickToNextMethod,
    clickToPreviousMethod,
    // disableBackButton,
    // disableNextButton
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
                // disableBackButton={disableBackButton}
                // disableNextButton={disableNextButton}
            />
            <MethodsButton
                id="nextBtn"
                icon={<BsArrowRight className="methodsButton__icon" />}
                label="Следующий шаг"
                buttonClass="methodsButton methodsButton__next"
                clickToNextMethod={clickToNextMethod}
                clickToPreviousMethod={clickToPreviousMethod}
                // disableBackButton={disableBackButton}
                // disableNextButton={disableNextButton}
            />
        </div>
    )
}

export default MethodsButtons;
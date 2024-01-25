import React from "react";
import "./MethodsButtons.css"
import { BsArrowLeft } from "react-icons/bs"
import { BsArrowRight } from "react-icons/bs"
import MethodsButton from "../MethodsButton/MethodsButton";

interface MethodsButtonsPropTypes {

};

const MethodsButtons: React.FC<MethodsButtonsPropTypes> = ({ }) => {
    return (
        <div className="methodsButtons">
            <MethodsButton
                icon={<BsArrowLeft />}
                label="Предыдущий шаг"
                buttonClass="methodsButton"
            />
            <MethodsButton
                icon={<BsArrowRight />}
                label="Следующий шаг"
                buttonClass="methodsButton methodsButton__right"
            />
        </div>
    )
}

export default MethodsButtons;
import React, { ReactNode } from "react";
import "./MethodsButton.css"
// import {BsArrowLeft} from "react-icons/bs"
// import {BsArrowRight} from "react-icons/bs"

interface MethodsButtonPropTypes {
    icon: ReactNode;
    label: string;
    buttonClass: string;
}

const MethodsButton: React.FC<MethodsButtonPropTypes> = ({ icon, label, buttonClass }) => {
    return (
        <button className={buttonClass} type="button">
            {icon}
            {label}
        </button>
    )
}

export default MethodsButton

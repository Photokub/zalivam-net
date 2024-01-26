import React, { ReactNode } from "react";
import "./MethodsButton.css"

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

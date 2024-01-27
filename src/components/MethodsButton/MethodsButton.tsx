import React, { ReactNode, useState, useEffect } from "react";
import "./MethodsButton.css"

interface MethodsButtonPropTypes {
    icon: ReactNode;
    label: string;
    buttonClass: string;
}

const MethodsButton: React.FC<MethodsButtonPropTypes> = ({
    icon,
    label,
    buttonClass,
}) => {

    const button = <button className={buttonClass} type="button">
        {icon}
        {label}
    </button>

    const buttonSmall = <button className="methodsButton methodsButton_small" type="button">
        {icon}
    </button>

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        let screenWidthValue = window.innerWidth
        window.addEventListener('resize', () => {
            screenWidthValue = window.innerWidth
            setScreenWidth(screenWidthValue)
        })
    })

    return (
        <>
            {screenWidth > 568 ? button : buttonSmall}
        </>
    )
}

export default MethodsButton

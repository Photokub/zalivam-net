import React, { ReactNode, useState, useEffect, MouseEventHandler } from "react";
import "./MethodsButton.css"

interface MethodsButtonPropTypes {
    id: string,
    icon: ReactNode;
    label: string;
    buttonClass: string;
    clickToNextMethod: (e: MouseEvent) => void,
    clickToPreviousMethod: (e: MouseEvent) => void,
}

const MethodsButton: React.FC<MethodsButtonPropTypes> = ({
    id,
    icon,
    label,
    buttonClass,
    clickToNextMethod,
    clickToPreviousMethod,
}) => {

    const handleClickType = (event: any) => {
        event.currentTarget.classList.contains("methodsButton__next") ? clickToNextMethod(event) : clickToPreviousMethod(event)
    }

    const button = <button id={id} className={buttonClass} type="button" onClick={(event) => handleClickType(event)}>
        {icon}
        {label}
    </button>

    const buttonSmall = <button id={id} className={"methodsButton_small" + " " + `${buttonClass}`} type="button" onClick={(event) => handleClickType(event)}>
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

import React, { ReactNode, useState, useEffect, MouseEventHandler } from "react";
import "./MethodsButton.css"

interface MethodsButtonPropTypes {
    icon: ReactNode;
    label: string;
    buttonClass: string;
    clickToNextMethod: (event: MouseEventHandler<HTMLButtonElement>) => {},
    clickToPreviousMethod: (event: MouseEventHandler<HTMLButtonElement>) => {},

}

const MethodsButton: React.FC<MethodsButtonPropTypes> = ({
    icon,
    label,
    buttonClass,
}) => {

    const handleClickType = (event: any) => {    
        event.currentTarget.classList.contains("methodsButton__next") ? console.log('вперед') : console.log('назад')    
    }

    const button = <button className={buttonClass} type="button" onClick={(event) => handleClickType(event)}>
        {icon}
        {label}
    </button>

    const buttonSmall = <button className={"methodsButton_small" + " " + `${buttonClass}`} type="button" onClick={(event) => handleClickType(event)}>
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

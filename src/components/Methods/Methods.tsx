import React, { MouseEventHandler, useLayoutEffect } from 'react';
import gsap from 'gsap';
import "./Methods.css";
import "../StepsContainer/StepsContainer"
import StepsContainer from '../StepsContainer/StepsContainer';
import MethodFocus from '../MethodFocus/MethodFocus';
import MethodsButtons from '../MethodsButtons/MethodsButtons';

interface MethodsPropTypes {
    MethodsDataArray: any,
    clickToNextMethod: (e: MouseEvent) => void,
    clickToPreviousMethod: (e: MouseEvent) => void,
    selectedMethod: number,
    handleAnimationNextBtn: any
    handleAnimationBackBtn: any
}

const Methods: React.FC<MethodsPropTypes> = ({
    MethodsDataArray,
    selectedMethod,
    clickToNextMethod,
    clickToPreviousMethod,
    handleAnimationNextBtn,
    handleAnimationBackBtn
}) => { 

    return (
        <section className='methods'>
            <div className="methods__warp">
                <h2 className="methods__title">Как мы работаем, и кто мы</h2>
                <StepsContainer
                    MethodsDataArray={MethodsDataArray}
                />
                <hr className="methods__bottomline" />
                <MethodFocus
                    MethodsDataArray={MethodsDataArray}
                    selectedMethod={selectedMethod}
                />
                <MethodsButtons
                    clickToNextMethod={clickToNextMethod}
                    clickToPreviousMethod={clickToPreviousMethod}
                    handleAnimationNextBtn={handleAnimationNextBtn}
                    handleAnimationBackBtn={handleAnimationBackBtn}
                />
            </div>
        </section>
    )
}

export default Methods
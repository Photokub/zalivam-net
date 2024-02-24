import React, { MouseEventHandler } from 'react';
import "./Methods.css";
import "../StepsContainer/StepsContainer"
import StepsContainer from '../StepsContainer/StepsContainer';
import MethodFocus from '../MethodFocus/MethodFocus';
import MethodsButtons from '../MethodsButtons/MethodsButtons';

interface MethodsPropTypes {
    MethodsDataArray: { id: number; stepName: string; stepText: string; }[],
    clickToNextMethod: (e: MouseEvent) => void,
    clickToPreviousMethod: (e: MouseEvent) => void,
    selectedMethod: number,
    // disableBackButton: boolean,
    // disableNextButton: boolean
}

const Methods: React.FC<MethodsPropTypes> = ({
    MethodsDataArray,
    selectedMethod,
    clickToNextMethod,
    clickToPreviousMethod,
    // disableBackButton,
    // disableNextButton
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
                    // disableBackButton={disableBackButton}
                    // disableNextButton={disableNextButton}
                />
            </div>
        </section>
    )
}

export default Methods
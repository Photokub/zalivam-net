import React, { MouseEventHandler } from 'react';
import "./Methods.css";
import "../StepsContainer/StepsContainer"
import StepsContainer from '../StepsContainer/StepsContainer';
import MethodFocus from '../MethodFocus/MethodFocus';
import MethodsButtons from '../MethodsButtons/MethodsButtons';

interface MethodsPropTypes {
    MethodsDataArray: [],
    clickToNextMethod: (event: MouseEventHandler<HTMLButtonElement>) => {},
    clickToPreviousMethod: (event: MouseEventHandler<HTMLButtonElement>) => {},
}

const Methods: React.FC<MethodsPropTypes> = ({
    MethodsDataArray,
    clickToNextMethod,
    clickToPreviousMethod
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
                />
                <MethodsButtons
                    clickToNextMethod={clickToNextMethod}
                    clickToPreviousMethod={clickToPreviousMethod}
                />
            </div>
        </section>
    )
}

export default Methods
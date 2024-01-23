import React from 'react';
import "./Methods.css";
import "../StepsContainer/StepsContainer"
import StepsContainer from '../StepsContainer/StepsContainer';
import MethodFocus from '../szethodFocus/MethodFocus';

interface MethodsPropTypes {

}

const Methods: React.FC<MethodsPropTypes> = ({ }) => {
    return (
        <section className='methods'>
            <div className="methods__warp">
                <h2 className="methods__title">Как мы работаем, и кто мы</h2>
                <StepsContainer />
                <hr className="methods__bottomline" />
                <MethodFocus />
            </div>
        </section>
    )
}

export default Methods
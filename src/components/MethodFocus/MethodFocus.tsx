import React from "react";
import "./MethodFocus.css"

interface MethodFocusPropTypes {

}

const MethodFocus: React.FC<MethodFocusPropTypes> = ({ }) => {
    return (
        <div className="methodFocus">
            <p className="methodFocus__number">3</p>
            <p className="methodFocus__title">СОСТАВЛЕНИЕ ПРЕТЕНЗИИ И ИСКОГОГО ЗАЯВЛЕНИЯ </p>
            <p className="methodFocus__subtitle">Lorem ipsum dolor sit amet consectetur. Tincidunt tortor cras ipsum viverra libero bibendum. Ut suspendisse aliquam integer nisl.</p>
        </div>
    )
}

export default MethodFocus;
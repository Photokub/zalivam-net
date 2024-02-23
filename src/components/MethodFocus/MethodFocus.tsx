import React from "react";
import "./MethodFocus.css"

interface MethodFocusPropTypes {
    key: number,
    id: number,
    stepName: string,
    stepText: string
}

const MethodFocus: React.FC<MethodFocusPropTypes> = ({
    id,
    stepName,
    stepText
}) => {
    return (
        <div className="methodFocus">
            <p className="methodFocus__number">{id}</p>
            <p className="methodFocus__title">{stepName}</p>
            <p className="methodFocus__subtitle">{stepText}</p>
        </div>
    )
}

export default MethodFocus;
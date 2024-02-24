import React from "react";
import "./MethodFocus.css"

interface MethodFocusPropTypes {
    selectedMethod: number,
    MethodsDataArray: { id: number; stepName: string; stepText: string; }[]
}

interface SelectedMethodPropTypes {
    id: number,
    stepName: string,
    stepText: string,
}

const MethodFocus: React.FC<MethodFocusPropTypes> = ({
    selectedMethod,
    MethodsDataArray
}) => {

    const currentMethod: SelectedMethodPropTypes = MethodsDataArray[selectedMethod]

    return (
        <div className="methodFocus">
            <p className="methodFocus__number">{currentMethod.id}</p>
            <p className="methodFocus__title">{currentMethod.stepName}</p>
            <p className="methodFocus__subtitle">{currentMethod.stepText}</p>
        </div>
    )
}

export default MethodFocus;
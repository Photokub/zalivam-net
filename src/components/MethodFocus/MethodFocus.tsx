import React, { useEffect, useState, useLayoutEffect } from "react";
import "./MethodFocus.css"
import { Link } from "react-router-dom";

interface MethodFocusPropTypes {
    selectedMethod: number,
    MethodsDataArray: any
}

interface SelectedMethodPropTypes {
    id: number,
    stepName: string,
    stepText: any,
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
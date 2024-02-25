import React from "react";
import {RiCheckFill} from "react-icons/ri"
import "./StepCard.css";

interface StepCardPropTypes {
    key: number,
    id: number,
    stepName: any
}

const StepCard: React.FC<StepCardPropTypes> = ({
    id,
    stepName
}) => {
    return (
        <div className="stepCard">
            <RiCheckFill className="stepCard__checkmark"/>
            <p className="stepCard__number">{id}</p>
            <p className="stepCard__title">{stepName}</p>
        </div>
    )
}

export default StepCard;
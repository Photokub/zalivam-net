import React from "react";
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
            <p className="stepCard__number">{id}</p>
            <p className="stepCard__title">{stepName}</p>
        </div>
    )
}

export default StepCard;
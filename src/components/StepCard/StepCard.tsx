import React from "react";
import "./StepCard.css";

interface StepCardPropTypes {

}

const StepCard: React.FC<StepCardPropTypes> = ({ }) => {
    return (
        <div className="stepCard">
            <p className="stepCard__number">5</p>
            <p className="stepCard__title">ПОЛУЧЕНИЕ ИСПОЛНИТЕЛЬНОГО ЛИСТА И ДЕНЕЖНЫХ СРЕДСТВ</p>
        </div>
    )
}

export default StepCard;
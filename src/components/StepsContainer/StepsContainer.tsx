import React from "react";
import "./StepsContainer.css";
import "../StepCard/StepCard"
import StepCard from "../StepCard/StepCard";

interface StepsContainerProptypes {

};

const StepsContainer: React.FC<StepsContainerProptypes> = ({ }) => {
    return (
        <div className="stepsContainer">
            <StepCard />
            <StepCard />
            <StepCard />
            <StepCard />
            <StepCard />
        </div>
    )
}

export default StepsContainer;
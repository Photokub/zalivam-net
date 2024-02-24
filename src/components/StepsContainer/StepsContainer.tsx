import React from "react";
import "./StepsContainer.css";
import "../StepCard/StepCard"
import StepCard from "../StepCard/StepCard";

interface StepsContainerProptypes {
    MethodsDataArray: { id: number; stepName: string; stepText: string; }[]
};

const StepsContainer: React.FC<StepsContainerProptypes> = ({
    MethodsDataArray
}) => {
    return (
        <div className="stepsContainer">
            {
                MethodsDataArray.map((data: any, id: number) =>
                    <StepCard key={id}
                        id={data.id}
                        stepName={data.stepName}
                    />
                )
            }
        </div>
    )
}

export default StepsContainer;
import React from "react";
import "./NameContainer.css";

interface NameContainerPropTypes {
    title: string;
    subTitle: string;
    id: string;
}

const NameContainer: React.FC<NameContainerPropTypes> = ({
    title,
    subTitle,
    id
}) => {

    return (
        <div
            className="nameContainer"
            id={id}
        >
            <p className="nameContainerTitle">{title}</p>
            <p className="nameContainerSubtitle">{subTitle}</p>
        </div>
    )
}

export default NameContainer;



import React from "react";
import "./StatElement.css"

interface StatElementPropTypes {
    title: any,
    //subtitle: any,
}

const StatElement: React.FC<StatElementPropTypes> = ({
    title,
    //subtitle
}) => {
    return (
        <div className="statElement">
            <h3 className="statElement__title">{title}</h3>
            {/* <p className="statElement__subtitle">{subtitle}</p> */}
        </div>
    )
}

export default StatElement
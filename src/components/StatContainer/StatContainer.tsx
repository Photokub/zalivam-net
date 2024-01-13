import React from "react"
import './StatContainer.css'
import StatElement from "../StatElement/StatElement"

interface StatContainerPropTypes {

}

const StatContainer: React.FC<StatContainerPropTypes> = ({ }) => {

    const moduleSpan = <span>100 <span className="statElement__span">МЛН</span></span>

    return (
        <div className="statContainer">
            <StatElement
                title="10 000"
                subtitle="КЛИЕНТОВ"
            />
            <StatElement
                title={moduleSpan}
                subtitle="ВЫПЛАТ"
            />
            <StatElement
                title="9"
                subtitle="ЛЕТ ПРАКТИКИ"
            />
            <StatElement
                title="5 000"
                subtitle="ВЫИГРАННЫХ ДЕЛ "
            />
        </div>
    )
}

export default StatContainer; 
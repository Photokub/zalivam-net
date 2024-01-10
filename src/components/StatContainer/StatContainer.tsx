import React from "react"
import './StatContainer.css'
import StatElement from "../StatElement/StatElement"

interface StatContainerPropTypes {

}

const StatContainer: React.FC<StatContainerPropTypes> = ({ }) => {

    // const moduleSpan = "100 <span className="statElement__span">млн</span>"
    const moduleSpan = <h3 className="statElement__title">100 <span className="statElement__span">млн</span></h3>

return (
    <div className="statContainer">
        <StatElement
            title="10 000"
            subtitle="КЛИЕНТОВ"
        />
        <StatElement
            title = {moduleSpan}
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
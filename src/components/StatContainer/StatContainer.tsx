import React from "react"
import './StatContainer.css'
import StatElement from "../StatElement/StatElement"

interface StatContainerPropTypes {

}

const StatContainer: React.FC<StatContainerPropTypes> = ({ }) => {

    // const moduleSpan = <span>100 <span className="statElement__span">МЛН</span></span>

    return (
        <div className="statContainer">
            <StatElement
                //title="10 000"
                title="Взыскание ущерба после залива помещений"
                // subtitle="Взыскание ущерба после залива помещений"
            />
            <StatElement
                //title={moduleSpan}
                title="Споры с застройщиками по ДДУ"
                // subtitle="Споры с застройщиками по ДДУ"
            />
            <StatElement
                //title="9"
                title="Взыскание ущерба после ДТП"
                // subtitle="Взыскание ущерба после ДТП"
            />
            <StatElement
                // title="5 000"
                title="Семейные споры"
                //subtitle="Семейные споры"
            />
            <StatElement
                // title="5 000"
                title="Банкротство"
                // subtitle="Банкротство"
            />
        </div>
    )
}

export default StatContainer; 
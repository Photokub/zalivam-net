import React from "react";
import "./InfoTooltip.css"
import sucsessIcon from "../../images/sucсess.svg"

interface InfoTooltipPropTypes{

}

const InfoTooltip: React.FC<InfoTooltipPropTypes> = ({ }) => {
    const sucsessText = "Сообщение успешно отправлено"
    const failureText = "Сообщение не отправлено"

    return (
        <div className="tooltip">
            <img src={sucsessIcon} className="tooltip__icon" />
            <p className="tooltip__text">Сообщение успешно отправлено</p>
        </div>
    )
}

export default InfoTooltip
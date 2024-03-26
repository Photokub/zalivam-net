import React from "react";
import "./InfoTooltip.css"
import sucsessIcon from "../../images/sucсess.svg"
import failureIcon from '../../images/failure.svg'

interface InfoTooltipPropTypes {
    isSent: boolean,
    isSucsess: boolean
}

const InfoTooltip: React.FC<InfoTooltipPropTypes> = ({
    isSent,
    isSucsess
}) => {
    const sucsessText = "Сообщение успешно отправлено"
    const failureText = "Сообщение не отправлено. Попробуйте ещё раз или повторите попытку позже"

    return (
        <div className={isSent ? "tooltip tooltip_visible" : "tooltip"}>
            <img src={isSucsess ? sucsessIcon : failureIcon} className={isSucsess ? "tooltip__icon tooltip__icon_sucsess" : "tooltip__icon tooltip__icon_failure"} alt={isSucsess ? "Успех" : "Неудача"} />
            <p className={isSucsess ? "tooltip__text tooltip__text_sucsess" : "tooltip__text tooltip__text_failure"}>{isSucsess ? sucsessText : failureText}</p>
        </div>
    )
}

export default InfoTooltip
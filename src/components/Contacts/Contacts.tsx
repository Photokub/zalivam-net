import React from "react";
import PhoneIcon from "../../images/header_phone_icon.svg"
import "./Contacts.css"


interface ContactsPropTypes {
    windowSize?: {
        innerWidth?: number,
    },
    displayStyle: string;
}

const Contacts: React.FC<ContactsPropTypes> = ({
    displayStyle
}) => {
    return (
        <div className={"contacts" + " " +`${displayStyle}`}>
            <p className="contacts__adress">Москва, Земляной Вал 64с2, кабинет 323</p>
            <img src={PhoneIcon} alt="пиктограмма телефона" className="contacts__icon" />
            <h4 className="contacts__phoneNumber">+7 (499) 714-81-36</h4>
        </div>
    )
}

export default Contacts
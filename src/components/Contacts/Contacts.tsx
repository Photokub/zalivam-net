import React from "react";
import PhoneIcon from "../../images/header_phone_icon.svg"
import "./Contacts.css"


interface ContactsPropTypes {

}

const Contacts: React.FC<ContactsPropTypes> = ({ }) => {
    return (
        <div className="contacts">
            <p className="contacts__adress">Москва, Красная пл. д.1</p>
            <img src={PhoneIcon} alt="пиктограмма телефона" className="contacts__icon" />
            <h4 className="contacts__phoneNumber">8 800 123 45 67</h4>
        </div>
    )
}

export default Contacts
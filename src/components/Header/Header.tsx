import React from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "../../images/header_phone_icon.svg"
import "./Header.css"
import Navigation from "../Navigation/Navigation";

const Header: React.FC = ({ }) => {
    return (
        <header className="header">
            <div className="header__wrap">
                <p className="header__logo">ЗАЛИВАМ <span className="header__logoHighlight">НЕТ</span></p>
                <Navigation />
                <div className="header__contacts">
                    <p className="header__contactsAdress">Москва, Красная пл. д.1</p>
                    <img src={PhoneIcon} alt="пиктограмма телефона" className="header__contacts__icon" />
                    <h4 className="header__contactsPhoneNumber">8 800 123 45 67</h4>
                </div>
            </div>
        </header>
    )
}

export default Header
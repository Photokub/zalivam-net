import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "../../images/header_phone_icon.svg"
import "./Header.css"
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header: React.FC = ({ }) => {

    const [windowSize, setWindowSize] = useState(getWindowSize());
    
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    
    return (
        <header className="header">
            <div className="header__wrap">
                <p className="header__logo">ЗАЛИВАМ <span className="header__logoHighlight">НЕТ</span></p>
                {windowSize.innerWidth <= 984 ? <BurgerMenu /> : <Navigation />}

                
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
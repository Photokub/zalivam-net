import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "../../images/header_phone_icon.svg"
import "./Header.css"
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Contacts from "../Contacts/Contacts";

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
                <div className="header__menuAndContactsBlock">
                    {windowSize.innerWidth <= 984 ? <BurgerMenu /> : <Navigation />}
                    <Contacts />
                </div>
            </div>
        </header>
    )
}

export default Header
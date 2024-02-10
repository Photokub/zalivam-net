import React, { useEffect, useState } from "react";
import "./Header.css"
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Contacts from "../Contacts/Contacts";

interface HeaderPropTypes {
    windowSize?: {
        innerWidth?: number,
    },
}

const Header: React.FC<HeaderPropTypes> = ({ windowSize }) => {

    return (
        <header className="header">
            <div className="header__wrap">
                <p className="header__logo">ЗАЛИВАМ <span className="header__logoHighlight">НЕТ</span></p>
                <div className="header__menuAndContactsBlock">
                    {windowSize!.innerWidth! <= 984 ?
                        <BurgerMenu
                            windowSize={windowSize}
                        /> : <Navigation />}
                    {windowSize!.innerWidth! >= 568 ?
                        <Contacts
                            windowSize={windowSize}
                            displayStyle=""
                        /> :
                        <Contacts
                            windowSize={windowSize}
                            displayStyle="contacts_hidden"
                        />
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
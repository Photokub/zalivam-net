import React, { useState } from "react";
import "./BurgerMenu.css"
import { Link, NavLink } from "react-router-dom";
import Contacts from "../Contacts/Contacts";

interface BurgerMunuPropTypes {
    // value?: boolean,
    windowSize: any;
}

const BurgerMenu: React.FC<BurgerMunuPropTypes> = ({
    // value,
    windowSize
}) => {

    const page = document.body
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

    const handleChange = (event: any) => {
        if (event.target.checked) {
            page.style.overflowY = 'hidden'
        } else {
            page.style.overflowY = 'scroll'
        }
        setIsSubscribed(current => !current);
    };

    return (
        <nav className="burger">
            <div className='burger__container'>
                <input
                    className='burger__container__input'
                    type="checkbox"
                    //value={isSubscribed}
                    onChange={handleChange}
                />
                <span className='burger__container__stripe'></span>
                <span className='burger__container__stripe'></span>
                <span className='burger__container__stripe'></span>
                <ul className='burger-menu-list'>
                    <li className='burger-menu-list__string'>
                        <Link to='#'
                            className='burger-menu__list-navlink'>О нас</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <NavLink
                            className="burger-menu__list-navlink"
                            to='#'>Решения</NavLink>
                    </li>
                    <li className='burger-menu-list__string'>
                        <NavLink
                            className="burger-menu__list-navlink"
                            to='#'>Как мы работаем?</NavLink>
                    </li>
                    <li className='burger-menu-list__string'>
                        <NavLink
                            className="burger-menu__list-navlink"
                            to='#'>Подать заявку</NavLink>
                    </li>
                    <li className='burger-menu-list__string'>
                        <NavLink
                            className="burger-menu__list-navlink"
                            to='#'>Отзывы</NavLink>
                    </li>
                    <li className='burger-menu-list__string'>
                        <NavLink
                            className="burger-menu__list-navlink"
                            to='#'>Связаться с нами</NavLink>
                    </li>
                    <li className='burger-menu-list__string'>
                        {windowSize.innerWidth <= 568 && <Contacts displayStyle=""/>}
                    </li>
                </ul>
                <span className='burger__substrate' />
            </div>
        </nav>
    )
}

export default BurgerMenu
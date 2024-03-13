import React, { useState } from "react";
import "./BurgerMenu.css"
// import { Link, NavLink } from "react-router-dom";
import {Link, animateScroll as scroll} from "react-scroll";
import Contacts from "../Contacts/Contacts";

interface BurgerMunuPropTypes {
    // value?: boolean,
    windowSize: any;
}

const BurgerMenu: React.FC<BurgerMunuPropTypes> = ({
    // value,
    windowSize
}) => {

    const burger = document.querySelector("burger__container__input")
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

    const closeMenu = () => {
        if (burger?.checked) {
            page.style.overflowY = 'hidden'
        } else {
            page.style.overflowY = 'scroll'
        }
        setIsSubscribed(current => !current);
    }

    const scrollToTop: any = () => {
        scroll.scrollToTop();
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
                        <Link
                            className='burger-menu__list-navlink'
                            to="about"
                            spy={true}
                            smooth={true}                            
                            onClick={() =>closeMenu()}
                            >О нас</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="solutions"
                            spy={true}
                            smooth={true}
                            onClick={scrollToTop}
                            >Решения</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="methods"
                            spy={true}
                            smooth={true}
                            onClick={scrollToTop}
                            >Как мы работаем?</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="ad"
                            spy={true}
                            smooth={true}
                            onClick={scrollToTop}
                            >Подать заявку</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="reviews"
                            spy={true}
                            smooth={true}
                            onClick={scrollToTop}
                            >Отзывы</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="feedback"
                            spy={true}
                            smooth={true}
                            onClick={scrollToTop}
                            >Связаться с нами</Link>
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
import React, { useState } from "react";
import "./BurgerMenu.css"
import {Link, animateScroll as scroll} from "react-scroll";
import Contacts from "../Contacts/Contacts";

interface BurgerMunuPropTypes {
    windowSize: any;
}

const BurgerMenu: React.FC<BurgerMunuPropTypes> = ({
    windowSize
}) => {

    const burger = document.querySelector(".burger__container__input") as HTMLInputElement
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
        if (burger.checked) {
            page.style.overflowY = 'scroll'
        } else {
            page.style.overflowY = 'hidden'
        }
        setIsSubscribed(current => !current);
    }

    const scrollToTop: any = () => {
        scroll.scrollToTop();
    };

    const handleOnClick = () => {
        setTimeout( closeMenu, 200)
    }

    return (
        <nav className="burger">
            <div className='burger__container'>
                <input
                    className='burger__container__input'
                    type="checkbox"
                    checked={isSubscribed}
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
                            onClick={handleOnClick}
                            >О нас</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="solutions"
                            spy={true}
                            smooth={true}
                            onClick={handleOnClick}
                            >Наша судебная практика
                            </Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="methods"
                            spy={true}
                            smooth={true}
                            onClick={handleOnClick}
                            >Как мы работаем?</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="ad"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            onClick={handleOnClick}
                            >Подать заявку</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="reviews"
                            spy={true}
                            smooth={true}
                            onClick={handleOnClick}
                            >Отзывы</Link>
                    </li>
                    <li className='burger-menu-list__string'>
                        <Link
                            className="burger-menu__list-navlink"
                            to="feedback"
                            spy={true}
                            smooth={true}
                            onClick={handleOnClick}
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
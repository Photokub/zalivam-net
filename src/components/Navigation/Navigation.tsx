import React from "react";
import {Link, animateScroll as scroll} from "react-scroll";
import "./Navigation.css"

interface NavigationPropTypes {

}

const Navigation: React.FC<NavigationPropTypes> = ({ }) => {

    const scrollToTop: any = () => {
        scroll.scrollToTop();
    };

    return (
        <nav className="nav">
            <ul className="navList">
                <li className="navList__item">
                    <Link
                    className="nav__link"
                    to="about"
                    spy={true}
                    smooth={true}
                    >О нас</Link>
                </li>
                <li className="navList__item">
                    <Link
                    className="nav__link"
                    to="solutions"
                    spy={true}
                    smooth={true}
                    >Наша судебная практика
                    </Link>
                </li>
                <li className="navList__item">
                    <Link
                    className="nav__link"
                    to="methods"
                    spy={true}
                    smooth={true}
                    >Как мы работаем?</Link>
                </li>
                <li className="navList__item">
                    <Link
                    className="nav__link"
                    to="ad"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    >Подать заявку</Link>
                </li>
                <li className="navList__item">
                    <Link
                    className="nav__link"
                    to="reviews"
                    spy={true}
                    smooth={true}
                    >Отзывы</Link>
                </li>
                <li className="navList__item">
                    <Link
                    className="nav__link"
                    to="feedback"
                    spy={true}
                    smooth={true}
                    >Связаться с нами</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
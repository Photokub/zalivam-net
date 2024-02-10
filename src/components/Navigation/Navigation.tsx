import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

interface NavigationPropTypes {

}

const Navigation: React.FC<NavigationPropTypes> = ({ }) => {

    return (
        <nav className="nav">
            <ul className="navList">
                <li className="navList__item">
                    <Link className="nav__link" to="#">О нас</Link>
                </li>
                <li className="navList__item">
                    <Link className="nav__link" to="#">Решения</Link>
                </li>
                <li className="navList__item">
                    <Link className="nav__link" to="#">Как мы работаем?</Link>
                </li>
                <li className="navList__item">
                    <Link className="nav__link" to="#">Подать заявку</Link>
                </li>
                <li className="navList__item">
                    <Link className="nav__link" to="#">Отзывы</Link>
                </li>
                <li className="navList__item">
                    <Link className="nav__link" to="#">Связаться с нами</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
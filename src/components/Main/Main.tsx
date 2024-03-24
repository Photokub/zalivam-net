import React from "react";
//import styles from './styles.module.css';
import { FaPhoneAlt } from "react-icons/fa"
import gorbunov from '../../images/gorbunov-main.png';
import otinov from '../../images/otinov-main.png'
import NameContainer from "../NameContainer/NameContainer";
import "./Main.css"


interface MainPropTypes {

}

const Main: React.FC<MainPropTypes> = () => {
    return (
        <section className="main">
            <div className="main__wrap">
                <div className="main__textContainer">
                    <h1 className="main__logo">Юридический центр </h1>
                    <ul className="main__titleList">
                        <li className="main__titleListItem">Проведение оценки ущерба</li>
                        <li className="main__titleListItem">Полное сопровождение в суде</li>
                        <li className="main__titleListItem">Поддержка клиента на всех этапах разрешения дела</li>
                    </ul>
                    {/* <h2 className="main__title">Проведение оценки ущерба<br />
                        Полное сопровождение в суде<br />
                        Поддержка клиента на всех этапах разрешения дела</h2> */}
                    <h3 className="main__subtitle">Наши приемущества:</h3>
                    <ul className="main__list">
                        <li className="main__listitem">Предоставление качественных услуг является нашей главной задачей</li>
                        <li className="main__listitem">Для нас важен комфорт клиента</li>
                        <li className="main__listitem">Мы делаем, а не просто говорим</li>
                    </ul>
                    <button className="main__button" type="button"><FaPhoneAlt className="main__buttonicon" />Заказать звонок</button>
                </div>
                <div className="main__imagesContainer">
                    <div className="main__imageContainer">
                        <img src={otinov} className="main__image" alt='Алексей Отинов' id="otinov__photo" />
                        <NameContainer
                            title="Алексей Отинов"
                            subTitle="юрист"
                            id="otinovNameContainer"
                        />
                    </div>
                    <div className="main__imageContainer">
                        <img src={gorbunov} className="main__image" alt='Адриан Горбунов' id="gorbunov__photo" />
                        <NameContainer
                            title="Адриан Горбунов"
                            subTitle="юрист"
                            id="gorbunovNameContainer"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main


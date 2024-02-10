import React from "react";
//import styles from './styles.module.css';
import { FaPhoneAlt } from "react-icons/fa"
import gorbunov from '../../images/gorbunov-main.png';
import otinov from '../../images/otinov-main.png'
import  NameContainer  from "../NameContainer/NameContainer";
import "./Main.css"


interface MainPropTypes {

}

const Main: React.FC<MainPropTypes> = () => {
    return (
        <section className="main">
            <div className="main__wrap">
                <div className="main__textContainer">
                    <h1 className="main__logo">Заливам.</h1>
                    <h2 className="main__title">Вас затопили?<br />
                        Протекла крыша?<br />
                        Соседи отрицают свою вину и отказываются возмещать ущерб?
                        Не беда! Мы поможем Вам!</h2>
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


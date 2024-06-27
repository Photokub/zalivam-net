import React, { Dispatch, SetStateAction } from "react";
//import styles from './styles.module.css';
import { FaPhoneAlt } from "react-icons/fa"
import gorbunov from '../../images/gorbunov-main.png';
import otinov from '../../images/otinov-main.png'
import NameContainer from "../NameContainer/NameContainer";
import "./Main.css"


interface MainPropTypes {
    openPopup: any,
    popupWithCBForm: Element | null,
    setIsCBPopupOpen: Dispatch<SetStateAction<boolean>>

}

const Main: React.FC<MainPropTypes> = ({
    openPopup,
    popupWithCBForm,
    setIsCBPopupOpen

}) => {
    return (
        <section className="main" id="main">
            <div className="main__wrap">
                <div className="main__textContainer">
                    <h1 className="main__logo">Юридический центр </h1>
                    <ul className="main__titleList">
                        <li className="main__titleListItem">Проведение оценки ущерба</li>
                        <li className="main__titleListItem">Полное сопровождение в суде</li>
                        <li className="main__titleListItem">Поддержка клиента на всех этапах разрешения дела</li>
                    </ul>
                    <h3 className="main__subtitle">Наши преимущества:</h3>
                    <ul className="main__list">
                        <li className="main__listitem">Предоставление качественных услуг является нашей главной задачей</li>
                        <li className="main__listitem">Для нас важен комфорт клиента</li>
                        <li className="main__listitem">Мы делаем, а не просто говорим</li>
                    </ul>
                    <button className="main__button" type="button" onClick={(e) => {openPopup(e, popupWithCBForm, "popup-with-CB-form", setIsCBPopupOpen(true))}}><FaPhoneAlt className="main__buttonicon" />Заказать звонок</button>
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


import React from "react";
import styles from './styles.module.css';
import { FaPhoneAlt } from "react-icons/fa"
import gorbunov from '../../images/gorbunov.png';
import otinov from '../../images/otinov.png'
import { NameContainer } from "../NameContainer/NameContainer";


interface MainPropTypes {

}

const Main: React.FC<MainPropTypes> = () => {
    return (
        <section className={styles.main}>
            <h1 className={styles.main__logo}>Заливам.</h1>
            <h2 className={styles.main__title}>Вас затопили?<br />
                Протекла крыша?<br />
                Соседи отрицают свою вину и отказываются возмещать ущерб?
                Не беда! Мы поможем Вам!</h2>
            <h3 className={styles.main__subtitle}>Наши приемущества:</h3>
            <ul className={styles.main__list}>
                <li className={styles.main__listitem}>Предоставление качественных услуг является нашей главной задачей</li>
                <li className={styles.main__listitem}>Для нас важен комфорт клиента</li>
                <li className={styles.main__listitem}>Мы делаем, а не просто говорим</li>
            </ul>
            <button className={styles.main__button} type="button"><FaPhoneAlt className={styles.main__buttonicon} />Заказать звонок</button>
            <img src={gorbunov} alt='Адриан Горбунов' id={styles.gorbunov__photo} />
            <img src={otinov} alt='Алексей Отинов' id={styles.otinov__photo} />
            <NameContainer
                title="Алексей Отинов"
                subTitle="юрист"
                right="490px"
                // borderRadius="0 20px 20px 20px"
            />
            <NameContainer
                title="Адриан Горбунов"
                subTitle="юрист"
                right="100px"
                // borderRadius="20px 20px 0 20px"
            />
        </section>
    )
}

export default Main


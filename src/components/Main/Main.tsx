import React from "react";
import styles from './styles.module.css';

interface MainPropTypes {

}

const Main: React.FC<MainPropTypes> = () => {
    return (
        <section className={styles.main}>
            <h1 className={styles.main__logo}>Заливам.НЕТ</h1>
            <h2 className={styles.main__title}>Вас затопили?
                Протекла крыша?
                Соседи отрицают свою вину и отказываются возмещать ущерб?
                Не беда! Мы поможем Вам!</h2>
            <h3 className={styles.main__subtitle}>Наши приемущества:</h3>
            <ul className={styles.main__list}>
                <li className={styles.main__listitem}>Предоставление качественных услуг является нашей главной задачей</li>
                <li className={styles.main__listitem}>Для нас важен комфорт клиента</li>
                <li className={styles.main__listitem}>Мы делаем, а не просто говорим</li>
            </ul>
        </section>
    )
}

export default Main


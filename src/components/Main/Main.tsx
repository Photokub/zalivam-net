import React from "react";
import styles from './styles.module.css';

interface MainPropTypes {

}

const Main: React.FC<MainPropTypes> = () => {
    return (
        <section className={styles.main}>
            <h1>Заливам.НЕТTTTTTY</h1>
            <h2>Вас затопили?
                Протекла крыша?
                Соседи отрицают свою вину и отказываются возмещать ущерб?
                Не беда! Мы поможем Вам!</h2>
            <h3>Наши приемущества:</h3>
            <h4>10 000</h4>
            <p>Предоставление качественных услуг является нашей главной задачей</p>

        </section>
    )
}

export default Main


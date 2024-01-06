import React from "react";
import "./About.css"
import StatElement from "../StatElement/StatElement";

interface AboutPropTypes {

}

const About: React.FC<AboutPropTypes> = ({ }) => {
    return (
        <section className="about">
            <div className="about__wrap">
                <h2 className="about__tilte">О нас в цифрах</h2>
                <StatElement
                    title="10 000"
                    subtitle="КЛИЕНТОВ"
                />
            </div>
        </section>
    )
}

export default About 
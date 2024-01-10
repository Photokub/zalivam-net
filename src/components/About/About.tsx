import React from "react";
import "./About.css"
import StatElement from "../StatElement/StatElement";
import StatContainer from "../StatContainer/StatContainer";

interface AboutPropTypes {

}

const About: React.FC<AboutPropTypes> = ({ }) => {
    return (
        <section className="about">
            <div className="about__wrap">
                <h2 className="about__title">О нас в цифрах</h2>
                <StatContainer />
            </div>
        </section>
    )
}

export default About 
import React from "react";
import "./About.css"

interface AboutPropTypes {

}

const About: React.FC<AboutPropTypes> = ({ }) => {
    return (
        <section className="about">
            <div className="about__wrap">
                <h2 className="about__tilte">О нас в цифрах</h2>

            </div>
        </section>
    )
}

export default About 
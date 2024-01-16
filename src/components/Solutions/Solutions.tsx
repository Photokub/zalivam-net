import React from "react";
import "./Solutions.css"
import Carousel from "../Carousel/Carousel";

interface SolutionsPropTypes {

}

const Solutions: React.FC<SolutionsPropTypes> = ({ }) => {
    return (
        <section className="solutions">
            <div className="solutions__wrap">
                <h2 className="solutions__title">Решения</h2>
                <div className="solutions__textContainer">
                    <h4 className="solutions__subtitle">Title</h4>
                    <p className="solutions__paragraph">Lorem ipsum dolor sit amet consectetur. Suspendisse turpis faucibus in massa non in id. Vivamus rhoncus quam mi nisl dui. Sed in integer aliquet egestas dolor pellentesque.</p>
                </div>
                <Carousel/>

            </div>
        </section>
    )
}

export default Solutions;
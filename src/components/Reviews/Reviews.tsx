import React from "react";
import "./Reviews.css"

interface ReviewsPropTypes {

}

const Reviews: React.FC<ReviewsPropTypes> = ({ }) => {
    return (
        <section className="reviews">
            <div className="reviews__wrap">
                <h2 className="reviews__title">Отзывы</h2>
                <div className="reviews__textContainer">
                    <h4 className="reviews__subtitle">Title</h4>
                    <p className="reviews__paragraph">Lorem ipsum dolor sit amet consectetur. Suspendisse turpis faucibus in massa non in id. Vivamus rhoncus quam mi nisl dui. Sed in integer aliquet egestas dolor pellentesque.</p>
                </div>
            </div>
        </section>
    )
}

export default Reviews;
import React from "react";
import "./Feedback.css"

interface FeedbackPropTypes {

}

const Feedback: React.FC <FeedbackPropTypes> = ({}) => {
    return(
        <section className="feedback">
            <div className="feedbck__wrap">
                <h2 className="feedback__title">Обратная связь</h2>
                <p className="feedback__paragraph">Заполните заявку и с вами свяжемся</p>
            </div>
        </section>
    )
} 

export default Feedback;
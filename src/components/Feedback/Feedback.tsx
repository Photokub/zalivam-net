import React from "react";
import "./Feedback.css"
import FeedbackForm from "../FeedbackForm/Feedbackform";

interface FeedbackPropTypes {

}

const Feedback: React.FC <FeedbackPropTypes> = ({}) => {
    return(
        <section className="feedback" id="feedback">
            <div className="feedbck__wrap">
                <h2 className="feedback__title">Обратная связь</h2>
                <p className="feedback__paragraph">Заполните заявку и с вами свяжемся</p>
                <FeedbackForm />
            </div>
        </section>
    )
} 

export default Feedback;
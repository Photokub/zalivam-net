import React from "react";
import "./Feedback.css"
import FeedbackForm from "../FeedbackForm/Feedbackform";

interface FeedbackPropTypes {
    sendFeedbackMessage: any,
    isLoading: boolean,
    isSent: boolean,
    isSucsess: boolean
}

const Feedback: React.FC<FeedbackPropTypes> = ({
    sendFeedbackMessage,
    isLoading,
    isSent,
    isSucsess
}) => {
    return (
        <section className="feedback" id="feedback">
            <div className="feedbck__wrap">
                <h2 className="feedback__title">Обратная связь</h2>
                <p className="feedback__paragraph">Заполните заявку и с вами свяжемся</p>
                <FeedbackForm
                    sendFeedbackMessage={sendFeedbackMessage}
                    isLoading={isLoading}
                    isSent={isSent}
                    isSucsess={isSucsess}
                />
            </div>
        </section>
    )
}

export default Feedback;
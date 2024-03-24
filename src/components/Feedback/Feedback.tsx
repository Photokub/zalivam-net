import React from "react";
import "./Feedback.css"
import FeedbackForm from "../FeedbackForm/Feedbackform";

interface FeedbackPropTypes {
    sendFeedbackMessage: any,
    isLoading: boolean,
    isSent: boolean,
    isSucsess: boolean,
    openPopup: any;
    agreementPopup: Element | null,
}

const Feedback: React.FC<FeedbackPropTypes> = ({
    sendFeedbackMessage,
    isLoading,
    isSent,
    isSucsess,
    openPopup,
    agreementPopup
}) => {
    return (
        <section className="feedback" id="feedback">
            <div className="feedbck__wrap">
                <h2 className="feedback__title">Обратная связь</h2>
                <p className="feedback__paragraph">Оставьте свои контакты, и наш менеджер свяжется с вами для обсуждения деталей</p>
                <FeedbackForm
                    sendFeedbackMessage={sendFeedbackMessage}
                    isLoading={isLoading}
                    isSent={isSent}
                    isSucsess={isSucsess}
                    openPopup={openPopup}
                    agreementPopup={agreementPopup}
                />
            </div>
        </section>
    )
}

export default Feedback;
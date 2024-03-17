import React, { FormEvent, useRef } from "react";
import "./FeedbackForm.css";
import { Link } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

interface FeedbackPropTypes {
    sendFeedbackMessage: any,
    isLoading: boolean,
    isSent: boolean,
    isSucsess: boolean
}

const FeedbackForm: React.FC<FeedbackPropTypes> = ({
    sendFeedbackMessage,
    isLoading,
    isSent,
    isSucsess
}) => {

    const feedbackNameRef = useRef() as any;
    const feedbackEmailRef = useRef() as any;
    //const feedbackEmailRef = useRef() as LegacyRef<HTMLInputElement> | undefined;
    const feedbackMessageRef = useRef() as any;

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        sendFeedbackMessage({
            name: feedbackNameRef.current.value,
            email: feedbackEmailRef.current.value,
            message: feedbackMessageRef.current.value,
        })
        feedbackNameRef.current.value = ("")
        feedbackEmailRef.current.value = ("")
        feedbackMessageRef.current.value = ("")
    }

    return (
        <div className="feedbackFormContainer">
            <form name="feedbackForm" onSubmit={(e) => { handleSubmit(e) }} className="feedbackForm" method="post">
                <label htmlFor="" className="feedbackForm__field">
                    <input ref={feedbackNameRef} type="text" className="feedbackFormInput" name="feedbackInputName" placeholder="Ваше имя *" required />
                </label>
                <label htmlFor="" className="feedbackForm__field">
                    <input ref={feedbackEmailRef} type="text" className="feedbackFormInput" name="feedbackInputEmail" placeholder="Email *" required />
                </label>
                <label htmlFor="" className="feedbackForm__field">
                    <textarea ref={feedbackMessageRef} className="feedbackFormInput feedbackFormInput_message" name="feedbackInputMessage" placeholder="Сообщение *" required />
                </label>
                <div className="feedbackFormBtnContainer">
                    <button className="feedbackFormSubmitBtn" type="submit">Отправить</button>
                    <span className="feedbackFormLegalText">*Нажимая на кнопку вы даете <Link to="#" className="feedbackFormLegalText__link">согласие на обработку</Link> своих персональных данных</span>
                </div>
            </form>
            {
                isSent ?
                    <InfoTooltip
                        isSent={isSent}
                        isSucsess={isSucsess}
                    /> :
                    <Preloader
                        isLoading={isLoading}
                    />
            }

        </div>
    )
}

export default FeedbackForm;

// function useEffect(arg0: () => void, arg1: never[]) {
//     throw new Error("Function not implemented.");
// }

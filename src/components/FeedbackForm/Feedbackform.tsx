import React from "react";
import "./FeedbackForm.css";
import { Link } from "react-router-dom";

interface FeedbackPropTypes {

}

const FeedbackForm: React.FC<FeedbackPropTypes> = ({ }) => {
    return (
        <div className="feedbackFormContainer">
            <form name="feedbackForm" action="" className="feedbackForm">
                <label htmlFor="" className="feedbackForm__field">
                    <input type="text" className="feedbackFormInput" name="feedbackInputName" placeholder="Ваше имя *" required />
                </label>
                <label htmlFor="" className="feedbackForm__field">
                    <input type="text" className="feedbackFormInput" name="feedbackInputEmail" placeholder="Email *" required />
                </label>
                <label htmlFor="" className="feedbackForm__field">
                    <textarea className="feedbackFormInput feedbackFormInput_message" name="feedbackInputMessage" placeholder="Сообщение *" required />
                </label>
                <div className="feedbackFormBtnContainer">
                    <button className="feedbackFormSubmitBtn" type="submit">Отправить</button>
                    <span className="feedbackFormLegalText">*Нажимая на кнопку вы даете <Link to="#" className="feedbackFormLegalText__link">согласие на обработку</Link> своих персональных данных</span>
                </div>
            </form>
        </div>
    )
}

export default FeedbackForm;
import React from "react";
import "./AdForm.css";
import { Link } from "react-router-dom";

interface AdFormPropTypes {

}

const AdForm: React.FC<AdFormPropTypes> = ({ }) => {
    return (
        <div className="adFormContainer">
            <form name="adFormFeedbck" action="" className="adForm">
                <h2 className="adFormTitle">Экспертиза <span className="adFormTitle adFormTitle_highlight">бесплатно</span> при заключении договора-услуг!</h2>
                <div className="adFormInputContainer">
                    <input type="text" className="adFormInput" name="adInputName" placeholder="Ваше имя *" required />
                    <input type="text" className="adFormInput" name="adInputEmail" placeholder="Email *" required />
                    <input type="text" className="adFormInput adFormInput_message" name="adInputMessage" placeholder="Сообщение *" required />
                </div>
                <div className = "adFormBtnContainer">
                    <button className="adFormSubmitBtn" type="submit">Проконсультироваться с экспертом</button>
                    <span className="adFormLegalText">*Нажимая на кнопку вы даете <Link to="#" className="adFormLegalText__link">согласие на обработку</Link> своих персональных данных</span>
                </div>
            </form>
        </div>
    )
}

export default AdForm;
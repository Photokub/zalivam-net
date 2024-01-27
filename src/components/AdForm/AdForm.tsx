import React from "react";
import "./AdForm.css"

interface AdFormPropTypes {

}

const AdForm: React.FC<AdFormPropTypes> = ({ }) => {
    return (
        <div className="adFormContainer">
            <h2 className="adFormTitle">Экспертиза бесплатно при заключении договора-услуг!</h2>
            <form name="adFormFeedbck" action="" className="adForm">
                <input type="text" className="adFormInput" name="adInputName" placeholder="Ваше имя *" required />
                <input type="text" className="adFormInput" name="adInputEmail" placeholder="Email *" required />
                <input type="text" className="adFormInput" name="adInputMessage" placeholder="Сообщение *" required />
                <button className="adFormSubmitBtn" type="submit">Проконсультироваться с экспертом</button>
            </form>
        </div>
    )
}

export default AdForm;
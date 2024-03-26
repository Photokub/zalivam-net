import React, { FormEvent, useRef } from "react";
import "./AdForm.css";
import { Link } from "react-router-dom";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Preloader from "../Preloader/Preloader";

interface AdFormPropTypes {
    sendFeedbackMessage: any,
    isLoading: boolean,
    isSent: boolean,
    isSucsess: boolean,
    openPopup: any,
    agreementPopup: Element | null,
}

const AdForm: React.FC<AdFormPropTypes> = ({
    sendFeedbackMessage,
    isLoading,
    isSent,
    isSucsess,
    openPopup,
    agreementPopup
}) => {

    const adNameRef = useRef() as any;
    const adEmailRef = useRef() as any;
    const adMessageRef = useRef() as any;

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        sendFeedbackMessage({
            name: adNameRef.current.value,
            email: adEmailRef.current.value,
            message: adMessageRef.current.value,
        })
        adNameRef.current.value = ("")
        adEmailRef.current.value = ("")
        adMessageRef.current.value = ("")
    }

    // const agreementPopup = document.querySelector(".agreement")

    return (
        <div className="adFormContainer">
            <form name="adFormFeedbck" action="" onSubmit={(e) => { handleSubmit(e) }} className="adForm">
                <h2 className="adFormTitle">Экспертиза <span className="adFormTitle adFormTitle_highlight">бесплатно</span> при заключении договора-услуг!</h2>
                <div className="adFormInputContainer">
                    <input ref={adNameRef} type="text" className="adFormInput" name="adInputName" placeholder="Ваше имя *" required />
                    <input ref={adEmailRef} type="text" className="adFormInput" name="adInputEmail" placeholder="Email *" required />
                    <textarea ref={adMessageRef} className="adFormInput adFormInput_message" name="adInputMessage" placeholder="Сообщение *" required />
                </div>
                <div className="adFormBtnContainer">
                    <button className="adFormSubmitBtn" type="submit">Проконсультироваться с экспертом</button>
                    <span className="adFormLegalText">*Нажимая на кнопку вы даете <Link to="#" className="adFormLegalText__link" onClick={(e) => openPopup(e, agreementPopup, "agreement")}>согласие на обработку</Link> своих персональных данных</span>
                    {/* <span className="adFormLegalText">*Нажимая на кнопку вы даете <Link to="#" className="adFormLegalText__link">согласие на обработку</Link> своих персональных данных</span> */}
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

export default AdForm;
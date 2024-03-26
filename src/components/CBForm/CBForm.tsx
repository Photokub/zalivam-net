import React, { FormEvent, useRef } from "react";
import "./CBForm.css";
import { Link } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { IoMdClose } from "react-icons/io";

interface CBFormPropTypes {
    sendCBMessage: any,
    isLoading: boolean,
    isSent: boolean,
    isSucsess: boolean,
    openPopup: any,
    // closePopup: any,
    agreementPopup: Element | null,
}

const CBForm: React.FC<CBFormPropTypes> = ({
    sendCBMessage,
    isLoading,
    isSent,
    isSucsess,
    openPopup,
    // closePopup,
    agreementPopup
}) => {

    const cbNameRef = useRef() as any;
    const cbPhoneRef = useRef() as any;
    //const feedbackMessageRef = useRef() as any;

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        sendCBMessage({
            name: cbNameRef.current.value,
            phone: cbPhoneRef.current.value,
        })
        cbNameRef.current.value = ("")
        cbPhoneRef.current.value = ("")
    }

    return (
        <div className="cbFormContainer">

            <form name="cbForm" onSubmit={(e) => { handleSubmit(e) }} className="cbForm" method="post">
                <label htmlFor="" className="cbForm__field">
                    <input ref={cbNameRef} type="text" className="cbFormInput" name="cbInputName" placeholder="Ваше имя *" required />
                </label>
                <label htmlFor="" className="cbForm__field">
                    <input ref={cbPhoneRef} type="text" className="cbFormInput" name="cbInputPhone" placeholder="Телефон *" required />
                </label>
                <div className="cbFormBtnContainer">
                    <button className="cbFormSubmitBtn" type="submit">Отправить</button>
                    <span className="cbFormLegalText">*Нажимая на кнопку вы даете <Link to="#" className="cbFormLegalText__link" onClick={(e) => openPopup(e, agreementPopup, "agreement")}>согласие на обработку</Link> своих персональных данных</span>
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

export default CBForm;

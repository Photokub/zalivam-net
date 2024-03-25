import React from "react";
import "./PopupWithCBForm.css"
import { IoMdClose } from "react-icons/io";
import CBForm from "../CBForm/CBForm";

interface PopupWithCBFormPropTypes {
    sendCBMessage: any
    closePopup: any,
    popupWithCBForm: Element | null,
    isLoading: boolean,
    isSent: boolean,
    isSucsess: boolean,
    openPopup: any,
    // closePopup: any,
    agreementPopup: Element | null,
}

const PopupWithCBForm: React.FC<PopupWithCBFormPropTypes> = ({
    closePopup,
    popupWithCBForm,
    sendCBMessage,
    openPopup,
    agreementPopup
}) => {
    return (
        <section className="popup-with-CB-form">
            <button className="popup-with-CB-form__closeButton" type="button" onClick={(e) => closePopup(e, popupWithCBForm, "popup-with-CB-form")}>
                <IoMdClose className="popup_closeButtonImg" />
            </button>
            <CBForm
                sendCBMessage={sendCBMessage}
                isLoading={false}
                isSent={false}
                isSucsess={false}
                openPopup={openPopup}
                agreementPopup={agreementPopup} 
                // closePopup={closePopup}
                />
        </section>
    )
}

export default PopupWithCBForm
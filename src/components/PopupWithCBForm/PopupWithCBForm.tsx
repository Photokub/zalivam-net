import React, { Dispatch, SetStateAction } from "react";
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
    setIsCBPopupOpen: Dispatch<SetStateAction<boolean>>
}

const PopupWithCBForm: React.FC<PopupWithCBFormPropTypes> = ({
    closePopup,
    popupWithCBForm,
    sendCBMessage,
    openPopup,
    agreementPopup,
    isLoading,
    isSent,
    isSucsess,
    setIsCBPopupOpen
}) => {

    return (
        <section className="popup-with-CB-form">
            <button className="popup-with-CB-form__closeButton" type="button" onClick={(e) => closePopup(e, popupWithCBForm, "popup-with-CB-form", setIsCBPopupOpen(false))}>
                <IoMdClose className="popup_closeButtonImg" />
            </button>
            <CBForm
                sendCBMessage={sendCBMessage}
                isLoading={isLoading}
                isSent={isSent}
                isSucsess={isSucsess}
                openPopup={openPopup}
                agreementPopup={agreementPopup} 
                // closePopup={closePopup}
                />
        </section>
    )
}

export default PopupWithCBForm
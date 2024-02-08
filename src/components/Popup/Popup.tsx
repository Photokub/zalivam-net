import React, { ReactNode } from "react";
import { IoMdClose } from "react-icons/io"
import TemplateImage from "../../images/certificate.png"
import "./Popup.css"

interface PopupPropTypes {
    children: ReactNode;
}

const Popup: React.FC<PopupPropTypes> = ({ children }) => {
    return (
        <div className="popup">
            <div className="popup__container">
                <button className="popup_closeButton" type="button">
                    <IoMdClose className="popup_closeButtonImg" />
                </button>
                <figure className="popup__figure">
                    <img src={TemplateImage} alt="изображение" className="popup__image" />
                    <figcaption className="popup__caption">Subtitle Subtitle Subtitle</figcaption>
                </figure>
                {/* {children} */}
            </div>
        </div>
    )
}

export default Popup;
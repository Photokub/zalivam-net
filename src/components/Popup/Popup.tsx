import React, { ReactNode } from "react";
import { IoMdClose } from "react-icons/io"
import TemplateImage from "../../images/certificate.png"
import "./Popup.css"

interface PopupPropTypes {
    children: ReactNode,
    closePopupSolution: (e: any)=>void,
    selectedSolution: number,
    selectedSolutionData: any
}

const Popup: React.FC<PopupPropTypes> = ({ 
    children,
    selectedSolution,
    closePopupSolution,
    selectedSolutionData 
}) => {

    // const selectedDoc = docCardsArray[selectedSolution]

    return (
        <div className="popup" aria-label="попап полноразмерного изображения">
            <div className="popup__container">
                <button className="popup_closeButton" type="button" onClick={(e) => closePopupSolution(e)}>
                    <IoMdClose className="popup_closeButtonImg" />
                </button>
                <figure className="popup__figure">
                    <img src={process.env.PUBLIC_URL + selectedSolutionData?.image[0]} alt={selectedSolutionData?.name} className="popup__image" />
                    <figcaption className="popup__caption">{selectedSolutionData?.name}</figcaption>
                </figure>
                {/* {children} */}
            </div>
        </div>
    )
}

export default Popup;
import React, { ReactNode } from "react";
import { IoMdClose } from "react-icons/io"
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc"
import TemplateImage from "../../images/certificate.png"
import "./Popup.css"
import { Link } from "react-router-dom";

interface PopupPropTypes {
    children: ReactNode,
    closePopupSolution: (e: any) => void,
    selectedSolution: number,
    selectedSolutionData: any,
    selectedSolutionImage: number,
    handleClickSolutionImageForward: (e: any) => void,
    handleClickSolutionImageBack: (e: any) => void
}

const Popup: React.FC<PopupPropTypes> = ({
    children,
    selectedSolution,
    closePopupSolution,
    selectedSolutionData,
    handleClickSolutionImageForward,
    handleClickSolutionImageBack,
    selectedSolutionImage
}) => {

    // const selectedDoc = docCardsArray[selectedSolution]

    const selectedName = selectedSolutionData.name
    const selectedCause = selectedSolutionData.cause
    const selectedSolutionText = selectedSolutionData.solution
    const selectedLink = selectedSolutionData.link
    const selectedImagesArray = selectedSolutionData.image



    console.log(selectedImagesArray)

    return (
        <div className="popup" aria-label="попап полноразмерного изображения">
            <div className="popup__container">
                <button className="popup_closeButton" type="button" onClick={(e) => closePopupSolution(e)}>
                    <IoMdClose className="popup_closeButtonImg" />
                </button>
                <figure className="popup__figure">
                    <img src={process.env.PUBLIC_URL + selectedSolutionData?.image[selectedSolutionImage]} alt={selectedSolutionData?.name} className="popup__image" />
                    <figcaption className="popup__caption">
                        <button id="backSolutionImageBtn" className="popup__captionButton" type="button"><VscChevronLeft className="popup__captionButtonArrow" onClick={(e) => handleClickSolutionImageBack(e)}/></button>
                        Страница {selectedSolutionImage + 1} из {selectedImagesArray.length}
                        <button id="nextSolutionImageBtn" className="popup__captionButton" type="button"><VscChevronRight className="popup__captionButtonArrow" onClick={(e) => handleClickSolutionImageForward(e)}/></button>
                        </figcaption>
                </figure>
                <div className="popup__descriptionBar">
                    <h4 className="popup__descriptionBarTitle">{selectedName}</h4>
                    <p className="popup__descriptionBarSubTitle">{selectedCause}</p>
                    <p className="popup__descriptionBarSubTitle">{selectedSolutionText.primaryText}<span className="popup__descriptionBarHighlight">{selectedSolutionText.amount}</span>{selectedSolutionText.srcondaryText}</p>
                    <Link className="popup__descriptionBarLink" to={selectedLink.url} target="blank">{selectedLink.linkText}</Link>
                </div>
                {/* {children} */}
            </div>
        </div>
    )
}

export default Popup;
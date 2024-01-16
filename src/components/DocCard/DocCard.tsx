import React from "react";
import "./DocCard.css"
import docImage from '../../images/certificate.png'


interface DocCardPropTypes {

}

const DocCard: React.FC<DocCardPropTypes> = ({ }) => {
    return (
        <figure className="docCard">
            <img src={docImage} alt="document" className="docCard__image" />
            <figcaption className="docCard__caption">Subtitle Subtitle Subtitle</figcaption>
        </figure>
    )
}

export default DocCard
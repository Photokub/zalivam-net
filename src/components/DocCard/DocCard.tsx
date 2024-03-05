import React from "react";
import "./DocCard.css"
import docImage from '../../images/certificate.png'


interface DocCardPropTypes {
    key: number,
    id: number,
    name: string,
    cause: string,
    solution: object,
    link: object,
    image: any,
    selectedSolution: any,
    openPopupSolution: (e: any) => void,
}

const DocCard: React.FC<DocCardPropTypes> = ({
    id,
    name,
    cause,
    solution,
    link,
    image,
    selectedSolution,
    openPopupSolution,
}) => {

    return (
        <figure className={selectedSolution !== id ? "docCard docCard_invisible" : "docCard"} >
            <button className="docCard__imageButton" type="button" onClick={(e) => openPopupSolution(e)}>
                <img src={process.env.PUBLIC_URL + image[0]} alt={name} className="docCard__image" />
            </button>
            <figcaption className="docCard__caption">{name}</figcaption>
        </figure>
    )
}

export default DocCard
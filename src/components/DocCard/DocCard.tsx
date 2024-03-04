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
    selectedSolution: any
}

const DocCard: React.FC<DocCardPropTypes> = ({    
    id,
    name,
    cause,
    solution,
    link,
    image,
    selectedSolution   
}) => {    

    return (
        <figure className={selectedSolution !== id ? "docCard docCard_invisible" : "docCard"} >
            <img src={process.env.PUBLIC_URL + image[0]} alt={name} className="docCard__image" />
            <figcaption className="docCard__caption">{name}</figcaption>
        </figure>
    )
}

export default DocCard
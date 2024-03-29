import React from "react";
import "./ReviewCard.css"
import { ImQuotesLeft } from "react-icons/im";
import authorFoto from "../../images/review_img.png"


interface ReviewCard {
    text: string,
    author: string,
    avatar: string,
    id: number,
}

const ReviewCard: React.FC<ReviewCard> = ({
    text,
    author,
    avatar
}) => {
    return (
        <div className="reviewCard">
            <ImQuotesLeft className="reviewCard__image" />
            <div className="reviewCard__reviewContainer">
                <img src={process.env.PUBLIC_URL + avatar} className="reviewCard__photo" alt="фото автора" />
                <blockquote className="reviewCard__blockquote">{text}</blockquote>
            </div>
            <p className="reviewCard__sign">{author}</p>
        </div>
    )
}

export default ReviewCard;
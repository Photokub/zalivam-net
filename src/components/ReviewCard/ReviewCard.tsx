import React from "react";
import "./ReviewCard.css"
import { ImQuotesLeft } from "react-icons/im";
import authorFoto from "../../images/review_img.png"


interface ReviewCard {

}

const ReviewCard: React.FC<ReviewCard> = ({ }) => {
    return (
        <div className="reviewCard">
            <ImQuotesLeft className="reviewCard__image" />
            <div className="reviewCard__reviewContainer">
                <img src={authorFoto} className="reviewCard__photo" alt="фото автора" />
                <blockquote className="reviewCard__blockquote">Lorem ipsum dolor sit amet consectetur. Suspendisse turpis faucibus in massa non in id. Vivamus rhoncus quam mi nisl dui. Sed in integer aliquet egestas dolor pellentesque. Lorem ipsum dolor sit amet consectetur. Suspendisse turpis faucibus in massa non in id. Vivamus rhoncus quam mSuspendisse turpis faucibus in massa non in id. Vivamus rhoncus quam m Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit</blockquote>
            </div>
            <p className="reviewCard__sign">Lorem ipsum</p>
        </div>
    )
}

export default ReviewCard;
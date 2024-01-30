import React from "react";
import "./Ad.css"
import AdForm from "../AdForm/AdForm";
import womenPhoto from "../../images/ad-image.png"

interface AdPropTypes {

}

const Ad: React.FC<AdPropTypes> = ({ }) => {
    return (
        <section className="ad">
            <div className="ad__wrap">
                <div className="ad__image">
                    <img src={womenPhoto} alt='Девушка-юрист' id="womenPhoto" />
                    <div className="ad__imageEffect"/>
                </div>

                <AdForm />
            </div>
        </section>
    )
}

export default Ad;
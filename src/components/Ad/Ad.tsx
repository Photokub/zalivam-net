import React from "react";
import "./Ad.css"
import AdForm from "../AdForm/AdForm";

interface AdPropTypes {

}

const Ad: React.FC<AdPropTypes> = ({ }) => {
    return (
        <section className="ad">
            <AdForm />
        </section>
    )
}

export default Ad;
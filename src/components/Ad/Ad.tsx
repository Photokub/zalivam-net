import React from "react";
import "./Ad.css"
import AdForm from "../AdForm/AdForm";
import womenPhoto from "../../images/ad-image.png"

interface AdPropTypes {
    sendFeedbackMessage: any,
    isLoading: boolean,
    isSent: boolean,
    isSucsess: boolean,
    openPopup: any,
    agreementPopup: Element | null,
}

const Ad: React.FC<AdPropTypes> = ({
    sendFeedbackMessage,
    isLoading,
    isSent,
    isSucsess,
    openPopup,
    agreementPopup
}) => {
    return (
        <section className="ad" id="ad">
            <div className="ad__wrap">
                <div className="ad__image">
                    <img src={womenPhoto} alt='Девушка-юрист' id="womenPhoto" />
                    <div className="ad__imageEffect" />
                </div>

                <AdForm
                    sendFeedbackMessage={sendFeedbackMessage}
                    isLoading={isLoading}
                    isSent={isSent}
                    isSucsess={isSucsess}
                    openPopup={openPopup}
                    agreementPopup={agreementPopup}
                />
            </div>
        </section>
    )
}

export default Ad;
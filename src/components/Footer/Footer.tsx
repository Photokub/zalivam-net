import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaVk } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"

interface FooterPropTypes {

}

const Footer: React.FC<FooterPropTypes> = ({ }) => {
    return (
        <footer className="footer">
            {/* <div className="footer__wrap"></div> */}
            <p className="footerTitle">ЗАЛИВАМ НЕТ</p>
            <div className="footer__contactContainer">
                <div className="footer__requisites">
                    <p className="footer__paragraph">Общество с ограниченной ответственностью «ЗАЛИВАМНЕТ»</p>
                    <p className="footer__paragraph">ИНН: 9731080512      КПП: 773101001</p>
                </div>
                <div className="footer__adress">
                    <p className="footer__paragraph">Юридический адрес:</p>
                    <p className="footer__paragraph">Москва, Красная площадь д. 1</p>
                </div>
                <div className="footer__socialMedia">
                    <p className="footer__paragraph">Мы в соцсетях</p>
                    <div className="footer__socialMediaIcons">
                        <Link className="footer__socialMediaLink" to="#">
                            <FaVk className="footer__socialMediaIcon" />
                        </Link>
                        <Link className="footer__socialMediaLink" to="#">
                            <FaTelegramPlane className="footer__socialMediaIcon" />
                        </Link>
                    </div>
                </div>
                <div className="footer__phone">
                    <p className="footer__paragraph">Звоните</p>
                    <h4 className="footer__phoneNumber">8 800 123 45 67</h4>
                    <p className="footer__paragraph">Бесплатно на территории РФ</p>
                </div>
            </div>
            <div className="footer__leegalTextContainer">
                <p className="footer__leegalTextParagraph">Информация, представленная на сайте, не является публичной офертой</p>
                <p className="footer__leegalTextParagraph">Дизайн и разработка A. Kubyshkin</p>
                <p className="footer__leegalTextParagraph">ООО «ЗАЛИВАМНЕТ» ©  2023</p>
            </div>
        </footer>
    )
}

export default Footer
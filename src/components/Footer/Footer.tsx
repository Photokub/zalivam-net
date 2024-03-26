import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaVk } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"

interface FooterPropTypes {
    Data: any;
}

const Footer: React.FC<FooterPropTypes> = ({
    Data
 }) => {

    return (
        <footer className="footer">
            <div className="footer__wrap">
                {/* <p className="footerTitle">ЗАЛИВАМ НЕТ</p> */}
                <div className="footer__contactContainer">
                    <div className="footer__requisites">
                        <p className="footer__paragraph">ИП Отинов А.А.<br/>ИНН 772168817907<br/>ОГРНИП 323774600460286</p>
                        <p className="footer__paragraph">ИП Горбунов А.Б.<br/>ИНН 772153219573<br/>ОГРНИП 322774600270288</p>
                    </div>
                    <div className="footer__adress">
                        <p className="footer__paragraph">Наш адрес:</p>
                        <p className="footer__paragraph">Москва, Земляной Вал 64с2, кабинет 323</p>
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
                        <h4 className="footer__phoneNumber"><Link className="footer__phoneNumberLink" to={"tel:+74997148136"}>+7 (499) 714-81-36</Link></h4>
                        <p className="footer__paragraph">Бесплатно на территории РФ</p>
                    </div>
                </div>
                <div className="footer__leegalTextContainer">
                    <p className="footer__leegalTextParagraph">Информация, представленная на сайте, не является публичной офертой</p>
                    <p className="footer__leegalTextParagraph">Дизайн и разработка <Link className="footer__link" to="http://photokub.ru/" target="blank">A. Kubyshkin</Link></p>
                    <p className="footer__leegalTextParagraph">{`ООО «ЗАЛИВАМНЕТ» ©  2023 - ${Data.getFullYear()}`}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
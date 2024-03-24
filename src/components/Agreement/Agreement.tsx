import React from "react";
import "./Agreement.css"
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

interface AgreementPropTypes {
    closePopup: any;
}

const Agreement: React.FC<AgreementPropTypes> = ({
    closePopup
}) => {

    const agreementPopup = document.querySelector(".agreement")

    return (
        <section className="agreement">
            <button className="agreement__closeButton" type="button" onClick={(e) => closePopup(e, agreementPopup, "agreement")}>
                <IoMdClose className="popup_closeButtonImg" />
            </button>
            <p className="agreement__title">Политика конфиденциальности и защиты информации.</p>
            <p className="agreement__text">
                Оставляя данные на сайте <Link to="" className="agreement__link" target="blank">ЗАЛИВАМ.НЕТ</Link> (далее – Сайт), Вы соглашаетесь с Политикой конфиденциальности и защиты информации.
            </p>
            <ul className="agreement__list">
                <li className="agreement__listItem">
                    <p className="agreement__subtitle">Защита данных</p>
                    <p className="agreement__text">Администрация Сайта не может передать или раскрыть информацию, предоставленную пользователем (далее Пользователь) при регистрации и использовании функций сайта третьим лицам, кроме случаев, описанных законодательством страны, на территории которой пользователь ведет свою деятельность.</p>
                </li>
                <li className="agreement__listItem">
                    <p className="agreement__subtitle">Получение персональной информации</p>
                    <p className="agreement__text">Для коммуникации на сайте пользователь обязан внести запрашиваемую персональную информацию. Для проверки предоставленных данных, сайт оставляет за собой право потребовать доказательства идентичности в онлайн или офлайн режимах.</p>
                </li>
                <li className="agreement__listItem">
                    <p className="agreement__subtitle">Использование персональной информации</p>
                    <p className="agreement__text">Сайт использует личную информацию Пользователя для обслуживания и для улучшения качества предоставляемых услуг. Часть персональной информации может быть предоставлена банку или платежной системе, в случае, если предоставление этой информации обусловлено процедурой перевода средств платежной системе, услугами которой Пользователь желает воспользоваться. Сайт прилагает все усилия для сбережения в сохранности личных данных Пользователя. Личная информация может быть раскрыта в случаях, описанных законодательством, либо, когда Администрация сочтет подобные действия необходимыми для соблюдения юридической процедуры, судебного распоряжения или легального процесса необходимого для работы Пользователя с Сайтом. В других случаях, ни при каких условиях, информация, которую Пользователь передает Сайту, не будет раскрыта третьим лицам.</p>
                </li>
                <li className="agreement__listItem">
                    <p className="agreement__subtitle">Коммуникация</p>
                    <p className="agreement__text">Согласие может быть отозвано Пользователем в любой момент. Для отзыва необходимо направить заявление на адрес электронной почты:</p>
                </li>
                <li className="agreement__listItem">
                    <p className="agreement__subtitle">Ссылки</p>
                    <p className="agreement__text">На Сайте могут содержаться ссылки на другие сайты. Сайт не несет ответственности за содержание, качество и политику безопасности этих сайтов. Данное заявление о конфиденциальности относится только к информации, размещенной непосредственно на сайте.</p>
                </li>
                <li className="agreement__listItem">
                    <p className="agreement__subtitle">Безопасность</p>
                    <p className="agreement__text">Сайт обеспечивает безопасность учетной записи Пользователя от несанкционированного доступа.</p>
                </li>
                <li className="agreement__listItem">
                    <p className="agreement__subtitle">Уведомления об изменениях</p>
                    <p className="agreement__text">Сайт оставляет за собой право вносить изменения в Политику конфиденциальности без дополнительных уведомлений. Нововведения вступают в силу с момента их опубликования. Пользователи могут отслеживать изменения в Политике конфиденциальности самостоятельно.</p>
                </li>
            </ul>


        </section>
    )
}

export default Agreement
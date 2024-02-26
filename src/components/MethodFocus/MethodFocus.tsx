import React, { useEffect, useState, useLayoutEffect } from "react";
import "./MethodFocus.css"
import { Link } from "react-router-dom";

interface MethodFocusPropTypes {
    selectedMethod: number,
    MethodsDataArray: any
}

interface SelectedMethodPropTypes {
    id: number,
    stepName: string,
    stepText: any,
}

const MethodFocus: React.FC<MethodFocusPropTypes> = ({
    selectedMethod,
    MethodsDataArray
}) => {

    const currentMethod: SelectedMethodPropTypes = MethodsDataArray[selectedMethod]


    const firstStep = 
    <div className="methodFocus__subtitle">
        <p className="methodFocus__subtitle">Если Вашу квартиру затопило, Вам необходимо:</p>
        <ul className="methodFocus__subtitle methodFocus__list">
            <li className="methodFocus__subtitle methodFocus__listItem">обесточить затопленное помещение через электрощит и перекрыть стояки с горячей и холодной водой;</li>
            <li className="methodFocus__subtitle methodFocus__listItem">вызвать аварийную диспетчерскую службу:
                <ul className="methodFocus__subtitle methodFocus__list">
                    <li className="methodFocus__subtitle methodFocus__listItem">Телефон аварийной диспетчерской службы в Москве:<Link className="methodFocus__subtitle methodFocus__link" to="tel:+74955395353">+7 (495) 539-53-53</Link>;</li>
                    <li className="methodFocus__subtitle methodFocus__listItem">Телефон Единой дежурной диспетчерской службы муниципалитетов Московской области можно найти на сайте: <Link className="methodFocus__subtitle methodFocus__link" target="blank" to="https://arki.mosreg.ru/sobytiya/novosti-ministerstva/12-09-2021-13-03-06-telefony-edds-gorodskikh-okrugov">Телефоны ЕДДС городских округов</Link>;</li>
                </ul>
            </li>
            <li className="methodFocus__subtitle methodFocus__listItem">уведомить о заливе управляющую компанию Вашего дома</li>
            <li className="methodFocus__subtitle methodFocus__listItem">получить акт о заливе. Акт о заливе выдает инженер управляющей компании, в акте описывается нанесённый ущерб и указывается причина протечки воды.</li>
        </ul>
    </div>

    const standartSteps = <p className="methodFocus__subtitle">{currentMethod.stepText}</p>

    return (
        <div className="methodFocus">
            <p className="methodFocus__number">{currentMethod.id}</p>
            <p className="methodFocus__title">{currentMethod.stepName}</p>
                {selectedMethod > 0 ? standartSteps : firstStep}
        </div>
    )
}

export default MethodFocus;
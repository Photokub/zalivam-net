import React, { MouseEventHandler, useLayoutEffect } from 'react';
import gsap from 'gsap';
import "./Methods.css";
import "../StepsContainer/StepsContainer"
import StepsContainer from '../StepsContainer/StepsContainer';
import MethodFocus from '../MethodFocus/MethodFocus';
import MethodsButtons from '../MethodsButtons/MethodsButtons';

interface MethodsPropTypes {
    MethodsDataArray: any,
    clickToNextMethod: (e: MouseEvent) => void,
    clickToPreviousMethod: (e: MouseEvent) => void,
    selectedMethod: number,
    handleAnimationNextBtn: any
    handleAnimationBackBtn: any
}

const Methods: React.FC<MethodsPropTypes> = ({
    MethodsDataArray,
    selectedMethod,
    clickToNextMethod,
    clickToPreviousMethod,
    handleAnimationNextBtn,
    handleAnimationBackBtn
}) => {

    return (
        <section className='methods'>
            <div className="methods__warp">
                <h2 className="methods__title">Как мы работаем, и кто мы</h2>
                <div className="methods__textContainer">
                    <p className="methods__paragraph">Наши юристы занимаются вопросами, связанными с заливом квартир и возмещением причиненного ущерба. Работа юристов включает в себя консультации клиентов, оценку размера ущерба, переговоры со страховыми компаниями (если это необходимо), подготовку всех необходимых документов и судебную защиту.
                        Мы не навязываем дополнительных услуг
                        Стоимость услуг обоснована, формируется в зависимости от Ваших запросов и остается неизменной до окончания выполнения договора. Оплата услуг возможна по факту возмещения ответчиком причиненного Вам вреда.
                        Наши специалисты представляют комплекс услуг в случае залива помещения. Мы создали все условия для комфортного взаимодействия и работы с клиентами и помогаем получить возмещение убытков, в проведении экспертизы и оценки.
                        Мы поддерживаем Доверителя на всех этапах разрешения дела, объясняем термины доступным языком. Вы всегда будете на связи с юристом и сможете задать все интересующие Вас вопросы. По каждому этапу Вы получите отчет о проделанной работе.
                    </p>
                </div>
                <StepsContainer
                    MethodsDataArray={MethodsDataArray}
                />
                <hr className="methods__bottomline" />
                <MethodFocus
                    MethodsDataArray={MethodsDataArray}
                    selectedMethod={selectedMethod}
                />
                <MethodsButtons
                    clickToNextMethod={clickToNextMethod}
                    clickToPreviousMethod={clickToPreviousMethod}
                    handleAnimationNextBtn={handleAnimationNextBtn}
                    handleAnimationBackBtn={handleAnimationBackBtn}
                />
            </div>
        </section>
    )
}

export default Methods
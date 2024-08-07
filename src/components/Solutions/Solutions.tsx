import React from "react";
import "./Solutions.css"
import Carousel from "../Carousel/Carousel";



interface SolutionsPropTypes {
    handleAnimationNextSolutionBtn: any,
    handleAnimationBackSolutionBtn: any,
    selectedSolution: any,
    handleClickCarouselForward: (e: MouseEvent) => void,
    handleClickCarouselBack: (e: MouseEvent) => void,
    openPopupSolution: (e: MouseEvent)=>void,
    SolutionsArray: { id: number; name: string; cause: string; solution: { primaryText: string; amount: string; srcondaryText: string; }; link: { url: string; linkText: string; }; image: string[]; }[],
}

const Solutions: React.FC<SolutionsPropTypes> = ({
    handleClickCarouselForward,
    handleClickCarouselBack,
    SolutionsArray,
    selectedSolution,
    handleAnimationNextSolutionBtn,
    handleAnimationBackSolutionBtn,
    openPopupSolution
}) => {
    return (
        <section className="solutions" id="solutions">
            <div className="solutions__wrap">
                <h2 className="solutions__title">Наша судебная практика</h2>
                <Carousel
                    selectedSolution={selectedSolution}
                    SolutionsArray={SolutionsArray}
                    handleClickCarouselForward={handleClickCarouselForward}
                    handleClickCarouselBack={handleClickCarouselBack}
                    handleAnimationNextSolutionBtn={handleAnimationNextSolutionBtn}
                    handleAnimationBackSolutionBtn={handleAnimationBackSolutionBtn}
                    openPopupSolution={openPopupSolution}
                />

            </div>
        </section>
    )
}

export default Solutions;
import React from "react";
import styles from './styles.module.css';
import './NameContainer.css'

interface NameContainerPropTypes {
    title: string;
    subTitle: string;
    modify: string;
    // right: string;
    // borderRadius: string;
}

const NameContainer: React.FC<NameContainerPropTypes> = ({
    title,
    subTitle,
    modify
    // right,
    // borderRadius
}) => {

    // function getStilePosition() {
    //     if window.width
    // }

     const classes = styles.nameContainer + ' ' + `nameContainer_${modify}`
    //const classes = styles.nameContainer + ' ' + styles.nameContainer_grobunov

    return (
        <div
        className = {classes}
        //className = "styles.nameContainer"
            style={{
                // right: `${right}`
                // border-radius: `${borderRadius}`
            }}
        >
            <p className={styles.nameContainerTitle}>{title}</p>
            <p className={styles.nameContainerSubtitle}>{subTitle}</p>
        </div>
    )
}

export { NameContainer }



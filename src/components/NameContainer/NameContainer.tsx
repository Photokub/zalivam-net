import React from "react";
import styles from './styles.module.css';
import './NameContainer.css'

interface NameContainerPropTypes {
    title: string;
    subTitle: string;
    modify: string;
}

const NameContainer: React.FC<NameContainerPropTypes> = ({
    title,
    subTitle,
    modify
}) => {

     const classes = styles.nameContainer + ' ' + `nameContainer_${modify}`
    return (
        <div
        className = {classes}
        >
            <p className={styles.nameContainerTitle}>{title}</p>
            <p className={styles.nameContainerSubtitle}>{subTitle}</p>
        </div>
    )
}

export { NameContainer }



import React from "react";
import styles from './styles.module.css';

interface NameContainerPropTypes {
    title: string;
    subTitle: string;
    right: string;
}

const NameContainer: React.FC<NameContainerPropTypes> = ({
    title,
    subTitle,
    right,
}) => {
    return (
        <div
            className={styles.nameContainer}
            style={{ right: `${right}` }}
        >
            <p className={styles.nameContainerTitle}>{title}</p>
            <p className={styles.nameContainerSubtitle}>{subTitle}</p>
        </div>
    )
}

export { NameContainer }



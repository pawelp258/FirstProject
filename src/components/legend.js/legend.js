import React, { useState } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import BackIcon from '../../UI/icons/icon-back-black.svg'

import styles from './legend.module.css'

const Legend = props => {
    const [showBackIcon, setShowBackIcon] = useState(false)

    return (
        <div>
            <Backdrop show={props.show} close={() => props.close()} />
            <div
                className={styles.legendContainer}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <img
                    alt="back icon"
                    src={BackIcon}
                    className={styles.legendBackIcon}
                    onClick={() => props.close()} />
                <div className={styles.legendDotArea}>
                    <i className="fas fa-circle" style={{ color: "orange" }}></i> Piłka ręczna/Siatkówka
                </div>
                <div className={styles.legendDotArea}>
                    <i className="fas fa-circle" style={{ color: "green" }}></i> Piłka nożna
                </div>
                <div className={styles.legendDotArea}>
                    <i className="fas fa-circle" style={{ color: "red" }}></i> Tenis/Koszykówka
                </div>
                <div className={styles.legendDotArea}>
                    <i className="fas fa-circle" style={{ color: "blue" }}></i> Baseny
                </div>
            </div>
        </div>
    )
}

export default Legend;
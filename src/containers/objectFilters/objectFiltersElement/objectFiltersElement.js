import React from 'react'

import styles from './objectFiltersElement.module.css'

const ObjectFiltersElement = props => {

    let elementStyle = styles.ObjectFiltersElement;

    if(props.object.active) {
        elementStyle = styles.activeObjectFiltersElement;
    }
    console.log(props.id, props.object)
    return (
        <div className={elementStyle} onClick={() => props.changeFilterHandler(props.id, props.object)}>
            {props.object.name}
        </div>
    )
}

export default ObjectFiltersElement;
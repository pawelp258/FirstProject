import React, { useEffect, useState, Fragment } from 'react'
import firebase from '../../../config/fbConfig'

import styles from './eventListElement.module.css'
import black from '../../../images/black.jpg'

import { NavLink } from 'react-router-dom'

const EventListElement = props => {

    const [object, setObject] = useState(null)


    useEffect(() => {
        let object_id, object_info;

        props.event.obiekt.get().then(resp => {
            object_id = resp.id;
            object_info = resp.data();
            object_info = {
                ...object_info,
                id: object_id
            }

            setObject(object_info);
        })
    }, []);


    return (
        <Fragment>
            {object &&
                <NavLink to={'/events/' + props.event.id}>
                    <div
                        className={styles.EventListElementContainer}
                        style={
                            props.my_css ?
                                {
                                    ...props.my_css,
                                    backgroundImage: `url(${object.zdjecie})`
                                }
                                :
                                {
                                    backgroundImage: `url(${object.zdjecie})`
                                }
                        }>
                        <img src={black} alt="black_image" className={styles.EventListElementShadow} />
                        <div className={styles.EventListElementLeftInfo}>
                            <div style={{ fontSize: '20px' }}>{props.event.nazwa}</div>
                            <div style={{ fontSize: '16px', color: "#eee" }}>{object.nazwa_wlasna}</div>
                            <div style={{ fontSize: '12px', color: "#eee" }}>{props.event.sport}</div>
                        </div>
                        <div className={styles.EventListElementRightInfo}>
                            {props.event.uczestnicy.length}/{props.event.limit_miejsc} uczestników
            </div>
                    </div>
                </NavLink>

            }
        </Fragment>
    )
}

export default EventListElement;
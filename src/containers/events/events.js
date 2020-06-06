import React, { useState } from 'react'

import styles from './events.module.css'
import { useSelector } from 'react-redux'

import MyEvents from './myEvents/myEvents'
import AllEvents from './allEvents/allEvents'
import IconBack from '../../UI/icons/icon-back-black.svg'
import { Link } from 'react-router-dom'

const Events = () => {
    // akutalny uzytkownik
    const currentUser = useSelector(state => state.firebase.auth.uid)

    // aktualne miasto
    const currentCity = useSelector(state => state.mapRedux.city)

    // filtry
    const filters = useSelector(state => state.mapRedux.filters)

    return (
        <div className={styles.EventsContainer}>
            <Link to="/">
                <img
                    src={IconBack}
                    alt="back icon"
                    className={styles.EvenstBackIcon}
                />
            </Link>
            {currentUser ?
                <MyEvents />
                :
                null
            }
            <AllEvents />
        </div>
    )
}

export default Events;
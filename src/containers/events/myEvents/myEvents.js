import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from '../events.module.css'

import firebase from '../../../config/fbConfig'

import EventListElement from '../eventListElement/eventListElement'

import ArrowUp from '../../../UI/icons/eventInfo/icons-arrow-up.svg'
import ArrowDown from '../../../UI/icons/eventInfo/icons-arrow-down.svg'

const MyEvents = props => {

        const currentUser = useSelector(state => state.firebase.auth.uid)
    const currentCity = useSelector(state => state.mapRedux.city.name)
    const [myEvents, setMyEvents] = useState([]);
    const [limit, setLimit] = useState(3)

    // filtry
    const filters = useSelector(state => state.mapRedux.filters)

    const [showMore, setShowMore] = useState(true)

    const getMyEvents = async (start) => {
        let myEventsArray = [];
        await firebase.firestore().collection('wydarzenie')
            .where('master', '==', firebase.firestore().collection('uzytkownik').doc(currentUser))
            .where('miasto', '==', currentCity)
            .orderBy("data_rozpoczecia")
            .startAfter(start)
            .get().then(snapshot => {
                if (snapshot.size < limit && snapshot.size > 0) setShowMore(false)
                snapshot.forEach(doc => {
                    let info = doc.data()
                    let el = {
                        id: doc.id,
                        ...info
                    }
                    myEventsArray.push(el)
                });
            })
        setMyEvents(myEventsArray);
        console.log(myEventsArray)
    }

    useEffect(() => {
        getMyEvents(new Date());
    }, [])

    return (
        <div className={styles.YourEvents}>
            <p>
                <b>Twoje Wydarzenia</b>
                {showMore ?
                    <span onClick={() => {setShowMore(false); setLimit(myEvents.length) }}>
                        <img className={styles.showMoreArrow} src={ArrowDown} height="100%"/>
                    </span>
                :
                    <span onClick={() => {setShowMore(true); setLimit(3) }}>
                        <img className={styles.showMoreArrow} src={ArrowUp} height="100%"/>
                    </span>
                }
            </p>
            {true &&
                <div className={styles.EventsList}>
                    {myEvents && myEvents.slice(0,limit).map((el, id) => {  
                            return (
                                <EventListElement
                                    key={el.id}
                                    event={el} />
                            )
                    })}
                </div>
            }
        </div>
    )
}

export default MyEvents;

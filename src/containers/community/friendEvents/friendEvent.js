import React, { useState, useCallback, useEffect } from 'react'
import styles from './friendEvent.module.css'
import { useSelector } from 'react-redux'
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch } from 'react-redux'
import { setFriend } from '../../../store/actions/friendActions'

import firebase from '../../../config/fbConfig'

import EventListElement from '../../events/eventListElement/eventListElement'

const FriendList = () => {

    const selectedUser = useSelector(state => state.friend.selectedFriend)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    const [userEvents, setUserEvents] = useState(null);

    const loader_css = `
        position: relative;
        top: calc(50% - 15px);
        text-align: center;
        `;

    const event_css = {
        width: '330px',
        margin: '0px 0px 10px 0px'
    }

    useEffect(() => {
        { selectedUser && getEvents() }
    }, [selectedUser])

    const getEvents = async () => {
        setLoading(true)
        const userRef = await firebase.firestore().collection('uzytkownik').doc(selectedUser);

        firebase.firestore().collection('wydarzenie')
            .where("uczestnicy", "array-contains", userRef)
            .orderBy("data_rozpoczecia")
            .get()
            .then(async snapshot => {
                const new_array = await Promise.all(snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }))
                setUserEvents(new_array)
                setLoading(false)
            }).catch(err => {
                console.log(err)
                setLoading(false)
            })

    }

    return (
        <div className={styles.FriendEventContainer}>
            <BeatLoader
                css={loader_css}
                size={30}
                color={"#69B4D6"}
                loading={loading}
            />
            {!userEvents ?
                !loading && <div className={styles.FriendEventPickFriend}>Wybierz znajomego!</div>
                :
                userEvents.map(event => {
                    return (
                        <EventListElement
                            key={event.id}
                            event={event}
                            my_css={event_css} />
                    )
                })
            }
        </div>
    )
}

export default FriendList;
import React, { Fragment, useState, useEffect } from 'react'
import firebase from '../../../config/fbConfig'

import styles from './eventMain.module.css'
import { useSelector } from 'react-redux'
import moment from 'moment'

import AddFriendIcon from '../../../UI/icons/eventInfo/add_friend_icon.svg'
import PhoneIcon from '../../../UI/icons/objectInfo/icon-phone.svg'

import CalendarIcon from '../../../UI/icons/eventInfo/calendar-icon.svg'
import TimeIcon from '../../../UI/icons/eventInfo/time-icon.svg'
import LocationIcon from '../../../UI/icons/eventInfo/location-icon.svg'

const EventMain = props => {

    const currentUser = useSelector(state => state.firebase.auth.uid)

    const [owner, setOwner] = useState({});

    const [isUserMember, setIsUserMember] = useState(false);


    useEffect( () => {
        getIsUserMember();
        getOwner();
    }, [props.event])

    const getIsUserMember = () => {
        if(props.event){
            const userRef = firebase.firestore().collection('uzytkownik').doc(currentUser);
            let isAny = false;
            props.event.uczestnicy.map(el => {
                if(el.isEqual(userRef))
                    isAny = true;
            })
            
            if(isAny)
                setIsUserMember(true)
            else
                setIsUserMember(false)
        }
    }

    const getOwner =  () => {
        props.event && props.event.master.get().then(doc => {
            let new_owner;
            let content = doc.data();
            new_owner = {
                ...content,
                id: doc.id 
           }
            setOwner(new_owner)
        })
    }

    const hours = () => {
        if (props.event)
            return (
                <Fragment>
                    {props.event.data_rozpoczecia.toDate().getHours()}:
                    {props.event.data_rozpoczecia.toDate().getMinutes()}-
                    {props.event.data_zakonczenia.toDate().getHours()}:
                    {props.event.data_zakonczenia.toDate().getMinutes()}
                </Fragment>
            )
    }

    const day = () => {
        if (props.event)
            return (
                <Fragment>
                    {moment(props.event.data_rozpoczecia.toDate()).calendar()}
                </Fragment>
            )
    }

    const joinEvent = () => {
        if(!isUserMember) {
            const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
            firebase.firestore().collection('wydarzenie').doc(props.event.id)
            .update({
                uczestnicy: arrayUnion(firebase.firestore().collection('uzytkownik').doc(currentUser))
            })
        } else {
            const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
            firebase.firestore().collection('wydarzenie').doc(props.event.id)
            .update({
                uczestnicy: arrayRemove(firebase.firestore().collection('uzytkownik').doc(currentUser))
            })
        }
    }

    const deleteEvent = () => {
        firebase.firestore().collection("czat_wydarzenia").doc(props.event.chatRef).delete();
        firebase.firestore().collection('wydarzenie').doc(props.event.id).delete();
    }

    const renderButton = () => {
        if(isUserMember){
            if(owner.id === currentUser){ return(
                <div className={styles.EventMainJoinButton} style={{backgroundColor:"red"}} onClick={() => deleteEvent()}>
                    USUŃ WYDARZENIE
                </div>
            )} else { return (
                <div className={styles.EventMainJoinButton} onClick={() => joinEvent()}>
                    OPUŚĆ WYDARZENIE
                </div>
            )}
        } else {
            if(props.event){
                if(props.event.uczestnicy.length === props.event.limit_miejsc) {
                    console.limit_miejsc(props.event.uczestnicy.length, props.event.limit_miejsc)
                    return null;
                } else { return (
                    <div className={styles.EventMainJoinButton} onClick={() => joinEvent()}>
                        DOŁĄCZ DO WYDARZENIA
                    </div>
                )}
            }
        }
    }

    return (
        <div className={styles.EventMainContainer}>
            <div className={styles.EventMainPhoto}>
                {props.object && <img className={styles.EventMainPhoto} src={props.object.zdjecie} alt="object photo" height="100%" width="100%" />}
            </div>
            <div className={styles.EventMainInfo}>
                <div className={styles.EventMainUserInfo}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <img
                            src={owner && owner.zdjecie}
                            alt="user photo" height="60px" width="60px"
                            style={{ borderRadius: "15px" }} />
                        <img src={AddFriendIcon} alt="add friend icon"
                            className={styles.EventMainAddFriendButton} />
                        <div>{owner && owner.nick} ({owner && owner.imie})</div>
                    </div>
                </div>
                <div className={styles.EventMainEventInfo}>
                    {props.event && props.event.numer_telefonu &&
                        <div className={styles.EventMainInfoElement}>
                            <div>
                                <img src={PhoneIcon} alt="phone icon"
                                    className={styles.EventMainIcon} />
                            </div>
                            <div>{props.event.numer_telefonu}</div>
                        </div>
                    }
                    <div className={styles.EventMainInfoElement}>
                        <div>
                            <img src={TimeIcon} alt="time icon"
                                className={styles.EventMainIcon} />
                        </div>
                        <div>
                            {hours()}
                        </div>
                    </div>
                    <div className={styles.EventMainInfoElement}>
                        <div>
                            <img src={CalendarIcon} alt="calendar icon"
                                className={styles.EventMainIcon} />
                        </div>
                        <div>
                            {day()}
                        </div>
                    </div>
                    <div className={styles.EventMainInfoElement}>
                        <div>
                            <img src={LocationIcon} alt="location icon"
                                className={styles.EventMainIcon} />
                        </div>
                        <div>
                            {props.object && props.object.ulica}
                            <p>{props.object && props.object.kod_pocztowy}
                                {props.object && props.object.miasto}
                            </p>
                        </div>
                    </div>
                </div>
                {renderButton()}
            </div>
        </div>
    )
}

export default EventMain;
import React, { useEffect, useState, useCallback } from 'react'

import styles from './eventUsers.module.css'

import { db } from '../../../config/fbConfig'

const EventUsers = props =>  {

    const [members, setMembers] = useState([])

    const getMembers = async () => {
        if(props.event) {
            const new_members  = await Promise.all(props.event.uczestnicy.map(member => {
                return member.get().then(doc => {
                    let new_member;
                    new_member = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return new_member
                })
            }))
            setMembers(new_members)
        }
    }


    useEffect( () => {
        getMembers();
    }, [props.event])
    

    return(
        <div className={styles.EventUsersContainer}> 
            <div className={styles.EventUsersColumn}
            style={{height: 'calc(40% - 40px)'}}>
                <h2>{props.event && props.event.nazwa}</h2>
                <p>{props.object && props.object.nazwa_wlasna}</p>
                <p>{props.event && props.event.sport}</p>
                <p>{props.event && props.event.uczestnicy.length}/{props.event && props.event.limit_miejsc} uczestników</p>
                <p>{props.event && props.event.opis}</p>
            </div>
            <div className={styles.EventUsersColumn}>
                Lista Uczestników
                <div className={styles.EventUsersList}>
                <ol>
                    {members &&  members.map(member => {
                        return(
                            <li key={member.id}>
                                <img className={styles.EventUsersLiPhoto} src={member.zdjecie} alt="member photo"/>
                                <span className={styles.EventUsersLiNick}>{member.nick}</span>
                            </li>
                        )
                    })}
                </ol>
                </div>
            </div>
        </div>
    )
}

export default EventUsers;

/*

    const getMembers = () => {
        db.collection('wydarzenie').doc(props.event_id).onSnapshot(snapshot => {
            console.log(snapshot.data())
        })
    }

    const getMembers = async() => {
        firebase.firestore().collection('wydarzenie').doc(event_id).onSnapshot(doc => {
           
        })
    }
*/
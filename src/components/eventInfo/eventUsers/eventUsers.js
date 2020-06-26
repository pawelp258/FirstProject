import React, { useEffect, useState } from 'react'
import AddFriendIcon from '../../../UI/icons/eventInfo/add_friend_icon.svg'

import styles from './eventUsers.module.css'
import { useSelector } from 'react-redux'

import firebase from '../../../config/fbConfig'

const EventUsers = props => {

    const [members, setMembers] = useState([])
    const [error, setError] = useState(null)

    const uid = useSelector(state => state.firebase.auth.uid)
    const currentUser = useSelector(state => state.firebase.profile)

    const getMembers = async () => {
        if (props.event) {
            const new_members = await Promise.all(props.event.uczestnicy.map(member => {
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

    const isFriend = member => {
        if (member == uid) return false;
        let decision = true;
        currentUser.znajomi && currentUser.znajomi.map(friend => {
            if (friend.id == member) decision = false;
        })

        return decision;

    }

    useEffect(() => {
        getMembers();
    }, [props.event])

    const sendInv = (member) => {
        const arrayUnion = firebase.firestore.FieldValue.arrayUnion;

        const userRef = firebase.firestore().collection('uzytkownik').doc(uid);
        firebase.firestore().collection('uzytkownik').doc(member.id)
            .update({
                zaproszenia: arrayUnion(userRef)
            }).then(resp => {
                setError(`Zaproszenie do ${member.nick} wysłane.`)
            })
    }

    return (
        <div className={styles.EventUsersContainer}>
            <div className={styles.EventUsersColumn}
                style={{ height: 'calc(40% - 40px)' }}>
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
                        {members && members.map(member => {
                            return (
                                <li key={member.id}>
                                    <img className={styles.EventUsersLiPhoto} src={member.zdjecie} alt="member photo" />
                                    <span className={styles.EventUsersLiNick}>{member.nick}</span>
                                    {
                                        isFriend(member.id) && (
                                            <div onClick={() => sendInv(member)} className={styles.EventUserAddFriendIcon}>
                                                <i className="fas fa-user-plus"></i>
                                            </div>)
                                    }
                                </li>
                            )
                        }
                        )}
                    </ol>
                </div>
                {error && <div style={{
                    fontSize: "12px",
                    padding: "0 10px",
                    color: "green"
                }}>{error}</div>}
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
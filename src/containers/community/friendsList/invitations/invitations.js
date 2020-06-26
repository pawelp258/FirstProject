import React, { useState, useEffect } from 'react'
import styles from './invitations.module.css'
import { useSelector } from 'react-redux'
import firebase from '../../../../config/fbConfig'
import BeatLoader from "react-spinners/BeatLoader";


const Invitations = () => {

    const currentUser = useSelector(state => state.firebase.profile)
    const [InvitationsArray, setInvitationsArray] = useState([]);
    const [loading, setLoading] = useState(false);

    const uid = useSelector(state => state.firebase.auth.uid)

    const [newFriend, setNewFriend] = useState('')
    const [error, setError] = useState(null)

    const new_css = `
        position: relative;
        top: calc(50% - 15px);`;


    useEffect(() => {
        { currentUser.zaproszenia && getFriends() }
    }, [currentUser])

    const getFriends = async () => {
        setLoading(true)
        const new_array = await Promise.all(currentUser.zaproszenia.map(el => {
            return el.get().then(resp => {
                let user = {
                    ...resp.data(),
                    id: resp.id
                }
                return user;
            })
        }))
        setInvitationsArray(new_array)
        setLoading(false)
    }

    const addFriend = (id) => {
        const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
        const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
        const currentUserRef = firebase.firestore().collection('uzytkownik').doc(uid);
        const selectedUserRef = firebase.firestore().collection('uzytkownik').doc(id);
        currentUserRef.update({
            znajomi: arrayUnion(selectedUserRef),
            zaproszenia: arrayRemove(selectedUserRef)
        })
        selectedUserRef.update({
            znajomi: arrayUnion(currentUserRef)
        })
    }

    const removeFriend = (id) => {
        const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
        const userRef = firebase.firestore().collection('uzytkownik').doc(uid);
        userRef.update({
            zaproszenia: arrayRemove(firebase.firestore().collection('uzytkownik').doc(id))
        })
    }

    const sendInv = () => {
        firebase.firestore().collection('uzytkownik').where('nick', '==', newFriend).get()
            .then(resp => {
                if (resp.empty) {
                    console.log(resp)
                    setError('Nie ma takiego użytkownika.')
                    return;
                }
                const currentUserRef = firebase.firestore().collection('uzytkownik').doc(uid);
                const newUserRef = firebase.firestore().collection('uzytkownik').doc(resp.docs[0].id);
                console.log(currentUser.znajomi)
                if (currentUser.znajomi && currentUser.znajomi.includes(newUserRef)) {
                    setError("Ten użytkownik jest twoim znajomym.")
                    return;
                }

                const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
                newUserRef.update({
                    zaproszenia: arrayUnion(currentUserRef)
                }).then(response => {
                    setError('Zaproszenie zostało wysłane.')
                })
            })
    }

    return (
        <div className={styles.InvitationsContainer}>
            <BeatLoader
                css={new_css}
                size={30}
                color={"#69B4D6"}
                loading={loading}
            />
            <ol>
                {InvitationsArray && InvitationsArray.map(user => {
                    return (
                        <li
                            key={user.id}>
                            <img className={styles.FriendsLiPhoto} src={user.zdjecie} alt="member photo" />
                            <span className={styles.FriendsLiNick}>{user.nick}</span>
                            <div className={styles.FriendsLiIcons}>
                                <span style={{ cursor: "pointer", margin: "0 5px" }} onClick={() => addFriend(user.id)}>
                                    <i className="fas fa-user-plus"></i>
                                </span>
                                <span style={{ cursor: "pointer", margin: "0 5px" }} onClick={() => removeFriend(user.id)}>
                                    <i className="fas fa-user-minus"></i>
                                </span>
                            </div>
                        </li>
                    )
                })}
            </ol>
            <div className={styles.InvitationsSearch}>
                <div style={{ display: "flex" }}>
                    <input
                        type="text"
                        placeholder="Podaj nick"
                        value={newFriend}
                        className={styles.InvitationsInputText}
                        onChange={(e) => setNewFriend(e.target.value)} />
                    <input
                        type="button"
                        value="Dodaj"
                        className={styles.InvitationsInputButton}
                        onClick={() => sendInv()} />
                </div>
                {error && <p className={styles.InvitationsError}>{error}</p>}
            </div>
        </div>
    )
}

export default Invitations;
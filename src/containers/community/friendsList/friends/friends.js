import React, { useEffect, useState } from 'react'
import styles from './friends.module.css'
import BeatLoader from "react-spinners/BeatLoader";

import firebase from '../../../../config/fbConfig'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { setFriend } from '../../../../store/actions/friendActions'

const Friends = (props) => {

    const [friendsArray, setFriendsArray] = useState([]);
    const [loading, setLoading] = useState(false);

    const currentUser = useSelector(state => state.firebase.profile)
    const uid = useSelector(state => state.firebase.auth.uid)
    const selectedFriend = useSelector(state => state.friend.selectedFriend)
    const dispatch = useDispatch()

    useEffect(() => {
        { currentUser.znajomi && getFriends() }
    }, [currentUser])

    const getFriends = async () => {
        setLoading(true)
        const new_array = await Promise.all(currentUser.znajomi.map(el => {
            return el.get().then(resp => {
                let user = {
                    ...resp.data(),
                    id: resp.id
                }
                return user;
            })
        }))
        setFriendsArray(new_array)
        setLoading(false)
    }

    const new_css = `
        position: relative;
        top: calc(50% - 15px);`;

    const removeFriend = id => {
        const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
        const currentUserRef = firebase.firestore().collection('uzytkownik').doc(uid);
        const selectedUserRef = firebase.firestore().collection('uzytkownik').doc(id);
        currentUserRef.update({
            znajomi: arrayRemove(selectedUserRef)
        })
        selectedUserRef.update({
            znajomi: arrayRemove(currentUserRef)
        })
    }

    return (
        <div className={styles.FriendsContainer}>
            <BeatLoader
                css={new_css}
                size={30}
                color={"#69B4D6"}
                loading={loading}
            />
            <ol>
                {friendsArray && friendsArray.map(user => {
                    return (
                        <li
                            key={user.id}
                            style={selectedFriend === user.id ? { fontWeight: "bold" } : null}>
                            <div style={{ cursor: 'pointer' }}
                                onClick={() => dispatch(setFriend(user.id))}>
                                <img className={styles.FriendsLiPhoto} src={user.zdjecie} alt="member photo" />
                                <span className={styles.FriendsLiNick}>{user.nick}</span>
                            </div>
                            <span className={styles.FriendsLIIcon} onClick={() => removeFriend(user.id)}><i class="fas fa-user-minus"></i></span>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Friends;
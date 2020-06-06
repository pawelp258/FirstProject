import React, { useState, useEffect, useCallback } from 'react'
import styles from './chat.module.css'
import { GiftedChat } from 'react-web-gifted-chat';
import firebase from '../../../config/fbConfig'
import axios from 'axios';
import BeatLoader from "react-spinners/BeatLoader";

import { useSelector } from 'react-redux'
import { relativeTimeRounding } from 'moment';
const Chat = (props) => {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false)

    const currentUser = useSelector(state => state.firebase.profile)
    const selectedFriend = useSelector(state => state.friend.selectedFriend)

    const uid = useSelector(state => state.firebase.auth.uid)

    const [roomId, setRoomId] = useState(null)

    useEffect(() => {
        { selectedFriend && getRoom(); }
    }, [selectedFriend])

    useEffect(() => {
        { roomId && getMessages(); }
    }, [roomId])


    const getRoom = async () => {
        setLoading(true)
        await firebase.firestore().collection('wiadomosci').get().then(resp => {
            let user1;
            let user2;
            let room_id = null;

            resp.docs.map(element => {
                user1 = false;
                user2 = false;

                const users = element.data().users;
                user1 = users.includes(selectedFriend)
                user2 = users.includes(uid)
                if (user1 && user2) room_id = element.id;
            })
            console.log(room_id)

            if (room_id)
                setRoomId(room_id)
            else
                createRoom();
        })
    }

    const createRoom = () => {
        firebase.firestore()
            .collection('wiadomosci')
            .add({
                users: [uid, selectedFriend],
            })
            .then(snapshot => {
                setRoomId(snapshot.id)
            });
    }

    const getMessages = () => {
        console.log(roomId)

        let time;
        axios.get('http://worldtimeapi.org/api/ip').then(resp => {
            time = resp.data.datetime;
        });

        firebase.firestore()
            .collection('wiadomosci')
            .doc(roomId)
            .collection('messages')
            .orderBy('createdAt', 'desc')
            .onSnapshot(querySnapshot => {
                const messages = querySnapshot.docs.map(doc => {
                    const firebaseData = doc.data();

                    const data = {
                        _id: doc.id,
                        text: '',
                        createdAt: new Date(time).getTime(),
                        ...firebaseData,
                    };

                    if (!firebaseData.system) {
                        data.user = {
                            ...firebaseData.user,
                            name: firebaseData.user.email,
                        };
                    }

                    return data;
                });

                setMessages(messages);
                setLoading(false);
            });

    }

    const handleSend = async (messages) => {
        const text = messages[0].text;
        console.log(text);
        let time;
        await axios.get('http://worldtimeapi.org/api/ip').then(resp => time = resp.data.datetime);
        await firebase.firestore()
            .collection('wiadomosci')
            .doc(roomId)
            .collection('messages')
            .add({
                text,
                createdAt: new Date(time).getTime(),
                user: {
                    _id: uid,
                    email: currentUser.email,
                    avatar: currentUser.zdjecie,
                    name: currentUser.nick,
                    ref: firebase.firestore()
                        .collection('uzytkownik')
                        .doc(uid)
                }
            });

        await firebase.firestore()
            .collection('wiadomosci')
            .doc(roomId)
            .set(
                {
                    latestMessage: {
                        text,
                        createdAt: new Date(time).getTime(),
                    },
                },
                { merge: true },
            );
    }


    const loader_css = `
        position: relative;
        top: calc(50% - 15px);
        text-align: center;
        `;

    return (
        <div className={styles.ChatContainer}>
            <BeatLoader
                css={loader_css}
                size={30}
                color={"#69B4D6"}
                loading={loading}
            />
            {!roomId ?
                !loading && <div className={styles.ChatPickFriend}>Wybierz znajomego!</div>
                :
                <GiftedChat
                    messages={messages}
                    onSend={handleSend}
                    user={{
                        _id: uid,
                        name: currentUser.nick,
                        avatar: currentUser.zdjecie
                    }}
                    placeholder="Napisz wiadomość..."
                />
            }
        </div>
    )
}

export default Chat;
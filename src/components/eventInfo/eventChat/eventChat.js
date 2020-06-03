import React, { useState, useEffect } from 'react'

import styles from './eventChat.module.css'

import { GiftedChat } from 'react-web-gifted-chat';

import firebase from '../../../config/fbConfig'
import firebase2 from 'firebase';
import axios from 'axios';

import { useSelector } from 'react-redux'

const EventChat = props => {

    const [messages, setMessages] = useState([]);
    const currentUser = useSelector(state => state.firebase.profile)
    const uid = useSelector(state => state.firebase.auth.uid)


    useEffect(() => {
        getMessages();
    }, [props.event])

    const getMessages = async () =>{ 
        if (props.event) {

            firebase.firestore().collection("czat_wydarzenia").doc(props.event.chatRef)
                .collection("wiadomosci")
                .orderBy('createdAt', 'desc')
                .onSnapshot(async querySnapshot => {
                    const new_messages = await Promise.all(querySnapshot.docs.map(async message => {

                        let time;
                        await axios.get('http://worldtimeapi.org/api/ip').then(resp => time = resp.data.datetime);

                        const firebaseData = message.data();
                        const data = {
                            _id: message.id,
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
                    }))
                    setMessages(new_messages);
                })
                
        }
    }

    const handleSend = async (messages) => {
        const text = messages[0].text;
        console.log(text);
        let time;
        await axios.get('http://worldtimeapi.org/api/ip').then(resp => time = resp.data.datetime);
        await firebase.firestore()
            .collection('czat_wydarzenia')
            .doc(props.event.chatRef)
            .collection('wiadomosci')
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
    }

    return (
        <div className={styles.EventChatContainer}>
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
        </div>
    )
}

export default EventChat;

/*

*/
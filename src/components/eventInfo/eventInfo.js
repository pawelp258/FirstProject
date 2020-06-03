import React, { useEffect, useState, Fragment } from 'react'
import { useHistory } from "react-router-dom";

import styles from './eventInfo.module.css'

import firebase from '../../config/fbConfig'
import EventChat from './eventChat/eventChat'
import EventMain from './eventMain/eventMain'
import EventUsers from './eventUsers/eventUsers'

import IconBack from '../../UI/icons/icon-back-black.svg'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const EventInfo = props => {
    const event_id = props.match.params.id;

    const uid = useSelector(state => state.firebase.auth.uid)
    const history = useHistory();

    const [event, setEvent] = useState(null)
    const [object, setObject] = useState(null)

    useEffect( () => {
        getEvent();
    }, [])

    const getEvent =  () => {
        firebase.firestore().collection('wydarzenie').doc(event_id).onSnapshot(doc => {
            if(!doc.exists){
                history.push("/events");
                return ;
            }
            let new_event;
            let content = doc.data();
            new_event = {
                ...content,
                id: event_id 
           }
           let new_object;
           new_event.obiekt.get()
            .then(resp => {
                let obiekt_id = resp.id;
                let obiekt_content = resp.data();
                new_object = { 
                    ...obiekt_content,
                    id: obiekt_id           
                }
                setObject(new_object)
            })
            setEvent(new_event)
        }, err => {
            console.log(err)
        })
    }
    
    
    return(
        <Fragment>
            <Link to="/events"><img src={IconBack} alt="back icon" className={styles.eventInfoBackIcon} /></Link>
            <div className={styles.EventInfoContainer}>
                <EventUsers event_id={event_id} event={event} object={object} />
                <EventMain 
                    event_id={event_id} 
                    event={event} 
                    object={object}/>
                <EventChat event_id={event_id} event={event}/>
            </div>
        </Fragment>
    );
}

export default EventInfo;

/*



*/

/*

       useEffect(()=> {
        let new_event = {};
        let new_master = {};
        let new_object = {};
        firebase.firestore().collection('wydarzenie').doc(event_id).get()
        .then(doc => {
            let content = doc.data();
            new_event = {
                ...content,
                id: event_id 
            }

            setEvent(new_event)

            let members = [];
            new_event.uczestnicy.map(member => {
                member.get().then(resp => {
                    let member_id = resp.id;
                    if(member_id === uid) setIsUserMember(true)

                    let member_info = resp.data();
                    let new_member = {
                        ...member_info,
                        id: member_id
                    }
                    members.push(new_member);
                })
                setEventMembers(members)
            })
            
            new_event.master.get()
            .then(resp => {
                let master_id = resp.id;
                let master_content = resp.data();
                new_master = { 
                    ...master_content,
                    id: master_id           
                }
                setMaster(new_master);
            })
            new_event.obiekt.get()
            .then(resp => {
                let obiekt_id = resp.id;
                let obiekt_content = resp.data();
                new_object = { 
                    ...obiekt_content,
                    id: obiekt_id           
                }
                setObject(new_object)
            })
            
        })

        console.log(new_event, new_master)
    },[]) 

*/
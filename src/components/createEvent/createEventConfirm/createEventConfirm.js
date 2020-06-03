import React from 'react'

import CalendarIcon from '../../../UI/icons/createEvent/icon-calendar.svg'
import PeopleIcon from '../../../UI/icons/createEvent/icon-ludzik.svg'
import DescribeIcon from '../../../UI/icons/createEvent/icon-opis.svg'
import SportIcon from '../../../UI/icons/createEvent/icon-sport.svg'
import TimeIcon from '../../../UI/icons/createEvent/icon-time.svg'
import NameIcon from '../../../UI/icons/createEvent/icon-name.svg'
import PhoneIcon from '../../../UI/icons/createEvent/icon-phone.svg'

import styles from './createEventConfirm.module.css'

import firebase from '../../../config/fbConfig'
import { useSelector } from 'react-redux'


const CreateEventConfirm = props => {

    const user_id = useSelector(state => state.firebase.auth.uid)
    const object = useSelector(state => state.mapRedux.selectedObject)

    const confirm = async () => {
        const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
        const dateAsArray = props.values.date.split('/')
        const currentDate = new Date(dateAsArray[2], dateAsArray[1] - 1, dateAsArray[0])
        const db = firebase.firestore();

        const startDate = currentDate.setHours(
            props.values.startTime._d.getHours(),
            props.values.startTime._d.getMinutes()
        );

        const endDate = currentDate.setHours(
            props.values.endTime._d.getHours(),
            props.values.endTime._d.getMinutes()
        );

        let id = db.collection('uzytkownik').doc(user_id);
        let objectRef = db.collection('obiekt').doc(object.id)

        let chatRef = await db.collection('czat_wydarzenia').add({
            nazwa: props.values.nameEvent
        }).then(doc => {
            return doc.id;
        })
        
        db.collection('wydarzenie').add({
            nazwa: props.values.nameEvent,
            data_rozpoczecia: new Date(startDate),
            data_zakonczenia: new Date(endDate),
            limit_miejsc: props.values.limitEvent,
            master: id,
            miasto: object.miasto,
            obiekt: objectRef,
            opis: props.values.describeEvent,
            sport: props.values.sport,
            numer_telefonu: props.values.phone,
            chatRef: chatRef,
            uczestnicy: arrayUnion(id)
        }).then(ref => {
            props.finishCreate();
        })

    }

    return (

        <div className={styles.CreateEventConfirmContainer}>
            <div className={styles.CreateEventConfirmField}>
                <img src={NameIcon} alt="name icon" className={styles.createEventFormIcon} />
                <div className={styles.createEventValue}>
                    {props.values.nameEvent}
                </div>
            </div>
            <div className={styles.CreateEventConfirmField}>
                <img src={PeopleIcon} alt="limit icon" className={styles.createEventFormIcon} />
                <div className={styles.createEventValue}>
                    {props.values.limitEvent}
                </div>
            </div>
            {props.values.phone ?
                (
                    <div className={styles.CreateEventConfirmField}>
                        <img src={PhoneIcon} alt="phone icon" className={styles.createEventFormIcon} />
                        <div className={styles.createEventValue}>
                            {props.values.phone}
                        </div>
                    </div>
                )
                : null
            }
            <div className={styles.CreateEventConfirmField}>
                <img src={SportIcon} alt="sport icon" className={styles.createEventFormIcon} />
                <div className={styles.createEventValue}>
                    {props.values.sport}
                </div>
            </div>
            <div className={styles.CreateEventConfirmField}>
                <img src={CalendarIcon} alt="calendar icon" className={styles.createEventFormIcon} />
                <div className={styles.createEventValue}>
                    {props.values.date}
                </div>
            </div>
            <div className={styles.CreateEventConfirmField}>
                <img src={TimeIcon} alt="time icon" className={styles.createEventFormIcon} />
                <div className={styles.createEventValue}>
                    {props.values.startTime._d.getHours()}:{props.values.startTime._d.getMinutes()}-{props.values.endTime._d.getHours()}:{props.values.endTime._d.getMinutes()}
                </div>
            </div>
            <div className={styles.CreateEventConfirmField}>
                <img src={DescribeIcon} alt="describe icon" className={styles.createEventFormIcon} />
                <div className={styles.createEventValue}>
                    {props.values.describeEvent}
                </div>
            </div>
            <div className={styles.CreateEventConfirmWarning}>W przypadku obiektów wymagających rezerwacji terminu
            przypominamy o uprzednim skontaktowaniu się z opiekunem obiektu w
                celu ustalenia godziny rezerwacji.</div>
            <div className={styles.CreateEventConfirmButtons}>
                <div className={styles.CreateEventConfirmButton}
                    style={{
                        backgroundColor: "grey",
                        color: 'black'
                    }}
                    onClick={props.back}>
                    EDYTUJ WYDARZENIE
                </div>
                <div className={styles.CreateEventConfirmButton}
                    onClick={() => confirm()}>
                    UTWÓRZ WYDARZENIE
                </div>
            </div>
        </div>
    )
}

export default CreateEventConfirm;

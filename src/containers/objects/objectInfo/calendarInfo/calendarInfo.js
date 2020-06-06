import React, { useEffect, useState } from 'react'
import styles from './calendarInfo.module.css'
import { useSelector } from 'react-redux';
import moment from 'moment'
import 'moment/locale/pl';
import BeatLoader from "react-spinners/BeatLoader";


import firebase from '../../../../config/fbConfig'

const CalendarInfo = (props) => {

    const object = useSelector(state => state.mapRedux.selectedObject)

    const [array, setArray] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        setLoading(true)
        const objectRef = firebase.firestore().collection('obiekt').doc(object.id)

        let startDay = new Date(props.date);
        let endDay = new Date(props.date);

        startDay.setHours(0, 0, 0, 0);
        endDay.setHours(23, 59, 59, 999);

        let datesArray = [];

        firebase.firestore().collection("wydarzenie")
            .where('obiekt', '==', objectRef)
            .where('data_rozpoczecia', '>=', startDay)
            .where('data_rozpoczecia', '<=', endDay)
            .orderBy('data_rozpoczecia')
            .get().then(resp => {
                resp.docs.map(el => {
                    datesArray.push({
                        ...el.data(),
                        id: el.id
                    })
                })
                setLoading(false)
                setArray(datesArray)
                console.log(datesArray)

            })
    }, [])

    const loader_css = `
    position: relative;
    top: calc(50% - 20px - 15px);
    text-align: center;
    `;

    return (
        <div className={styles.CalendarInfoContainer}>
            <div className={styles.CalendarInfoHeader}>
                <div
                    className={styles.CalendarInfoBackArrow}
                    onClick={props.close}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                {moment(props.date).locale('pl').format("LL")}
            </div>
            <BeatLoader
                css={loader_css}
                size={30}
                color={"#69B4D6"}
                loading={loading}
            />
            <div className={styles.CalendarInfoHours}>
                {array && array.map(hour => {
                    return (
                        <div className={styles.CalendarInfoHour} key={hour.id}>
                            {moment(hour.data_rozpoczecia.toDate()).locale('pl').format('LT')}-
                            {moment(hour.data_zakonczenia.toDate()).locale('pl').format('LT')} Zajęte
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CalendarInfo;
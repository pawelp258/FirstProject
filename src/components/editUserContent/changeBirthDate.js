import React, { useState } from 'react'

import styles from './changeStages.module.css'

import DatePicker from "react-datepicker";

import BirthdayIcon from '../../UI/icons/editUser/birth-icon.svg'

import firebase from '../../config/fbConfig'
import { useSelector } from 'react-redux'


const ChangeBirthDate = props => {

    const uid = useSelector(state => state.firebase.auth.uid)
    const [info, setInfo] = useState("")

    const [birthDate, setBirthDate] = useState(() => {
        const dateAsArray = props.currentUser.dataUrodzenia.split('/')
        return new Date(dateAsArray[2],dateAsArray[1]-1,dateAsArray[0])      
    })

    const handleDateChange = date => {
        setBirthDate(date)
    };

    const updateBirthDate = () => {
        const dateFormat = `${birthDate.getDate()}/${birthDate.getMonth() + 1}/${birthDate.getFullYear()}`;
        firebase.firestore().collection('uzytkownik').doc(uid).update({
            dataUrodzenia: dateFormat
        }).then(
            setInfo("Data urodzenia została zmieniona.")
        )
    }

    return (
        <div className={styles.changeStagesContainer}>
            <div style={{ margin: "0px 10px" }}>
                <img src={BirthdayIcon} alt="birthday icon" height="20px" width="20px" />
                <span className={styles.changeStagesValue}>Data Urodzenia:</span>
            </div>

            <DatePicker
                className={styles.changeStagesInput} 
                selected={birthDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
            />
            <div className={styles.changeStagesInfo}>
                {info}
            </div>
            <div className={styles.changeStagesSubmitButton}
                onClick={updateBirthDate}>
                Zapisz zmiany
            </div>
        </div>
    )
}

export default ChangeBirthDate;
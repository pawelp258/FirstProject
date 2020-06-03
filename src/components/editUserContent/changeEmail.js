import React, { useState } from 'react'

import styles from './changeStages.module.css'

import EmailIcon from '../../UI/icons/editUser/email-icon.svg'
import { useSelector } from 'react-redux'

import firebase from '../../config/fbConfig'

const ChangeEmail = props => {


    const uid = useSelector(state => state.firebase.auth.uid)

    const [newEmail, setNewEmail] = useState("");
    const [password, setPassword] = useState("");

    const [infoEmail, setInfoEmail] = useState(null)
    const [info, setInfo] = useState(null)

    const updateEmail = () => {
        if(newEmail.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/)){
            let user = firebase.auth().currentUser;    
            
            let cred = firebase.auth.EmailAuthProvider.credential(
                props.currentUser.email,
                password
            );

            user.reauthenticateWithCredential(cred)
            .then(resp =>{
                user.updateEmail(newEmail)
                .then(resp => {
                    firebase.firestore().collection('uzytkownik').doc(uid).update({
                        email: newEmail
                    })
                    setInfo('Adres e-mail został zmieniony.')
                }).catch(err => {
                    if(err.code === 'auth/email-already-in-use')
                        setInfo('E-mail jest już zajęty.')
                })

            }).catch(err => {
                if(err.code === 'auth/wrong-password')
                    setInfo('Złe hasło.')
            })
        }
    }

    const newEmailCheck = (e) => {
        if(e.target.value.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/))
            setInfoEmail(null)
        else
            setInfoEmail("Niewłaściwy adres e-mail")
        
        setNewEmail(e.target.value)
    }

    return (
        <div className={styles.changeStagesContainer}>
            <div style={{ margin: "0px 10px" }}>

                <img src={EmailIcon} alt="email icon" height="20px" width="20px" />
                <span className={styles.changeStagesValue}>{props.currentUser.email}</span>
            </div>

            <input
                type="email"
                className={styles.changeStagesInput}
                placeholder="Wpisz nowy e-mail"
                value={newEmail}
                onChange={(e) => newEmailCheck(e)} />
            <input
                type="password"
                className={styles.changeStagesInput}
                placeholder="Wpisz hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            { infoEmail && <div className={styles.changeStagesInfo}>{infoEmail}</div>}
            { info && <div className={styles.changeStagesInfo}>{info}</div>}
            <div
                className={styles.changeStagesSubmitButton}
                onClick={() => updateEmail()}>
                Zapisz zmiany
            </div>
        </div>
    )
}

export default ChangeEmail;
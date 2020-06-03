import React, { useState } from 'react'

import styles from './changeStages.module.css'

import PasswordIcon from '../../UI/icons/editUser/password-icon.svg'

import firebase from '../../config/fbConfig'

const ChangePassword = props => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");


    const [infoPassword, setInfoPassword] = useState(null)
    const [info, setInfo] = useState(null)

    const updatePassword = () => {
        if(newPassword.length >= 6){
            let user = firebase.auth().currentUser;    
            
            let cred = firebase.auth.EmailAuthProvider.credential(
                props.currentUser.email,
                oldPassword
            );

            user.reauthenticateWithCredential(cred)
            .then(resp =>{
                user.updatePassword(newPassword)
                .then(
                    setInfo('Hasło zostało zmienione.')
                )
            }).catch(err => {
                if(err.code === 'auth/wrong-password')
                    setInfo('Złe stare hasło.')
            })
        }
    }

    const newPasswordCheck = (e) => {
        if(e.target.value.length >= 6)
            setInfoPassword(null)
        else
            setInfoPassword("Hasło musi składać się z conajmniej 6 znaków!")
        
            setNewPassword(e.target.value)
    }

    return (
        <div className={styles.changeStagesContainer}>
            <div style={{ margin: "0px 10px" }}>
                <img src={PasswordIcon} alt="password icon" height="20px" width="20px" />
                <span className={styles.changeStagesValue}>{props.currentUser.email}</span>
            </div>
            <input
                type="password"
                className={styles.changeStagesInput}
                placeholder="Stare hasło"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)} />
            <input
                type="password"
                className={styles.changeStagesInput}
                placeholder="Nowe hasło"
                value={newPassword}
                onChange={(e) => newPasswordCheck(e)} />
            {infoPassword && <div className={styles.changeStagesInfo}>{infoPassword}</div>}
            {info && <div className={styles.changeStagesInfo}>{info}</div>}
            <div
                className={styles.changeStagesSubmitButton}
                onClick={() => updatePassword()}>
                Zapisz zmiany
            </div>
        </div>
    )
}

export default ChangePassword; 

import React, { useState } from 'react' 

import styles from './changeStages.module.css'

import NameIcon from '../../UI/icons/editUser/name-icon.svg'

import firebase from '../../config/fbConfig'
import { useSelector } from 'react-redux'

const ChangeName = props => {

    const uid = useSelector(state => state.firebase.auth.uid)

    const [name, setName] = useState("");

    const [info, setInfo] = useState("")

    const udpateName = () => {
        firebase.firestore().collection('uzytkownik').doc(uid).update({
            imie: name
        }).then(
            setInfo("Imię zostało zmienione.")
        )
    }

    return(
        <div className={styles.changeStagesContainer}>
            <div style={{margin:"0px 10px"}}>
                <img src={NameIcon} alt="name icon" height="20px" width="20px" />
                <span className={styles.changeStagesValue}>{props.currentUser.imie}</span>
            </div>

            <input 
                type="text" 
                className={styles.changeStagesInput} 
                placeholder="Wpisz nowe imię"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
            <div className={styles.changeStagesInfo}>
                {info}
            </div>
            <div 
                className={styles.changeStagesSubmitButton}
                onClick={()=>udpateName()}>
                Zapisz zmiany
            </div>
        </div>
    )
}

export default ChangeName;
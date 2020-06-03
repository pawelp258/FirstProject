import React, { useState, Fragment } from 'react'

import styles from './askAboutPassword.module.css'

import { createModal } from 'react-modal-promise'


const AskAboutPassword =  ({ isOpen, close }) =>{ 

    const [password, setPassword] = useState('')

    const cancel = (value) => close(value);

    return (
        <div>
            <div onClick={()=>cancel(false)} 
            className={styles.AskAboutPasswordBackDrop}>
            </div>
            <div className={styles.AskAboutPasswordContainer}>
                <p style={{fontSize:"16px"}}>Istnieje już konto z tym adresem e-mail. Aby połączyć swoje konto z kontem Facebook podaj hasło:</p>
                <input 
                    type="password" 
                    value={password} onChange={(e)=>setPassword(e.target.value)}
                    className={styles.AskAboutPasswordInput}/>
                <div className={styles.AskAboutPasswordButtons}>
                    <div className={styles.AskAboutPasswordSubmitButton} onClick={() => cancel(password)}>Potwierdź</div>
                    <div className={styles.AskAboutPasswordCancelButton} onClick={() =>  cancel(false)}>Wróć</div>
                </div>
            </div>
        </div>
    )
}

export const PasswordModal = createModal(AskAboutPassword)


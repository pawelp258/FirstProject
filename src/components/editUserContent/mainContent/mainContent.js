import React from 'react'

import BirthdayIcon from '../../../UI/icons/editUser/birth-icon.svg'
import EmailIcon from '../../../UI/icons/editUser/email-icon.svg'
import NameIcon from '../../../UI/icons/editUser/name-icon.svg'
import PasswordIcon from '../../../UI/icons/editUser/password-icon.svg'

import styles from './mainContent.module.css'

const MainContent = props => {

    return (
        <div className={styles.MainContentContainer}>
            <ul>
                {   props.currentUser.imie &&
                    <li>
                        <img src={NameIcon} alt="name icon" style={{ marginRight: "30px" }} height="20px" width="20px" />
                        <span className={styles.MainContentValue}
                            onClick={() => props.changeStage('name')}
                        >
                            {props.currentUser.imie}
                        </span>
                    </li>
                }
                {   props.currentUser.email &&
                    <li>
                        <img src={EmailIcon} alt="email icon" style={{ marginRight: "30px" }} height="20px" width="20px" />
                        <span 
                            className={styles.MainContentValue}
                            onClick={() => {props.currentUser.typ_logowania==='standard' && props.changeStage('email') }}
                            style={props.currentUser.typ_logowania==='standard' ? {cursor:"pointer"} : {cursor:"default"} }
                        >
                            {props.currentUser.email}
                        
                        </span>
                    </li>
                }
                {   props.currentUser.dataUrodzenia &&
                    <li>
                        <img src={BirthdayIcon} alt="Birthday Icon" style={{ marginRight: "30px" }} height="20px" width="20px" />
                        <span 
                            className={styles.MainContentValue}
                            onClick={() => {props.changeStage('birthDay') }}
                        >
                            {props.currentUser.dataUrodzenia}
                        
                        </span>
                    </li>
                }
                {   props.currentUser.typ_logowania==='standard' &&
                    <li>
                        <img src={PasswordIcon} alt="Password icon" style={{ marginRight: "30px" }} height="20px" width="20px" />
                        <span 
                            className={styles.MainContentValue}
                            onClick={() => {props.changeStage('password') }}
                        >
                           *****************
                        </span>
                    </li>
                }
            </ul>
        </div>
    )
}

export default MainContent;
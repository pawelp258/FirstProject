import React, { Fragment, useState } from 'react' 

import Backdrop from '../../UI/Backdrop/Backdrop'

import styles from './logInPanel.module.css'

import LogIn from './logIn/logIn'
import Register from './register/register'
import BlackBack from '../../UI/icons/icon-back-black.svg'

const LogInPanel = props => {

    const [content, setContent] = useState('login')

    const closeLogInPanel = () => {
        setContent('login');
        props.close()
    }

    return(
        <Fragment>
            <Backdrop show={props.show} close={props.close} />
            <div className={styles.LogInPanelContainer} style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0' }}>
                
                <img 
                    src={BlackBack} 
                    alt="back icon"
                    className={styles.LogInPanelBackIcon}
                    onClick={()=>closeLogInPanel()}/>

                <div 
                    className={ styles.LogInPanelSwitchButtonLeft }
                    style={
                        content==='login' ? {color:"#000"} : {color:"#959DAD"}}
                    onClick={()=>setContent('login')}>
                    Zaloguj się
                </div>
                <div
                    className={styles.LogInPanelSwitchButtonRight}
                    style={
                        content==='register' ? {color:"#000"} : {color:"#959DAD"}}
                    onClick={()=>setContent('register')}>
                    Zarejestruj się
                </div>
                <div style={{clear:"both"}}></div>
                {content === 'login' &&
                    <LogIn />
                }
                {content === 'register' &&
                    <Register />
                }
            </div>
        </Fragment>
    )
}

export default LogInPanel;

/*

                        content=='register' ? styles.LogInPanelSwitchButtonActive : styles.LogInPanelSwitchButtonUnActive,
*/
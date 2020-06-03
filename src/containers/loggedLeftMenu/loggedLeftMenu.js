import React, { useState, useEffect } from 'react'

import { signOut } from '../../store/actions/authActions'
import { connect, useSelector } from 'react-redux'

import styles from './loggedLeftMenu.module.css'

import Logo from '../../UI/icons/Logo.svg'

import NotificationsImage from '../../UI/icons/leftMenu/icon-powiadomienia.svg'
import NotificationsImageActive from '../../UI/icons/leftMenu/icon-powiadomienia-active.svg'

import EventsImage from '../../UI/icons/leftMenu/icon-wydarzenia.svg'
import EventsImageActive from '../../UI/icons/leftMenu/icon-wydarzenia-active.svg'

import ProfileEdit from '../../UI/icons/leftMenu/icon-profileEdit.svg'
import AboutUsImage from '../../UI/icons/leftMenu/icon-onas.svg'
import PoliticImage from '../../UI/icons/leftMenu/icon-polityka.svg'
import LogOutImage from '../../UI/icons/leftMenu/icon-wyloguj.svg'

import IconPensil from '../../UI/icons/icon-pencil.svg'

import EditUser from '../editUser/editUser'
import { NavLink } from 'react-router-dom'

const LoggedLeftMenu = props => {

    const currentUser = useSelector(state => state.firebase.profile)

    const [showEdit, setShowEdit] = useState(false);

    const [path, setPath] = useState("/")

    return (
        <div className={styles.LoggedLeftMenu}>
            <EditUser
                show={showEdit}
                close={() => setShowEdit(false)} />

            <div >
                <NavLink to="/"><img onClick={() => setPath("/")} src={Logo} /></NavLink>
            </div>
            <ul>
                <li onClick={() => { setPath("/adminPanel") }}>
                    <NavLink activeClassName={styles.LoggedLeftMenuActiveLink} to="/adminPanel">
                        <img
                            src={(window.location.pathname.includes("/adminPanel")) ? NotificationsImageActive : NotificationsImage}
                            alt="notification icon" width="60px" height="60px" />
                        Panel Admina
                    </NavLink>
                </li>
                <li>
                    <img src={NotificationsImage} alt="notification icon" width="60px" height="60px" />
                    Powiadomienia
                </li>
                <li>
                    <NavLink onClick={() => setPath("/events")} activeClassName={styles.LoggedLeftMenuActiveLink} to="/events">
                        <img
                            src={(window.location.pathname.includes("/events")) ? EventsImageActive : EventsImage}
                            alt="events icon" width="60px" height="60px" />
                        Wydarzenia
                    </NavLink>
                </li>

                <li onClick={() => setShowEdit(true)}>
                    <img src={AboutUsImage} alt="edit profile icon" width="60px" height="60px" />
                    Edytuj Profil
                </li>
                <li>
                    <img src={AboutUsImage} alt="about us icon" width="60px" height="60px" />
                    O nas
                </li>
                <li style={{ border: "none" }}>
                    <img src={PoliticImage} alt="politics icon" width="60px" height="60px" />
                    Polityka Prywatności
                </li>
                <li onClick={() => { props.signOut() }}>
                    <img src={LogOutImage} alt="logout icon" width="60px" height="60px" />
                    Wyloguj się
                </li>
            </ul>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(LoggedLeftMenu);

/*

 border-left: 6px solid #69B4D6;
*/
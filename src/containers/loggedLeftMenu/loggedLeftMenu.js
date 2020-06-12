import React, { useState, useEffect } from 'react'

import { signOut } from '../../store/actions/authActions'
import { connect, useSelector } from 'react-redux'

import styles from './loggedLeftMenu.module.css'

import Logo from '../../UI/icons/Logo.svg'

import NotificationsImage from '../../UI/icons/leftMenu/icon-powiadomienia.svg'

import EventsImage from '../../UI/icons/leftMenu/icon-wydarzenia.svg'

import ProfileEdit from '../../UI/icons/leftMenu/icon-editProfile.svg'
import AboutUsImage from '../../UI/icons/leftMenu/icon-onas.svg'
import PoliticImage from '../../UI/icons/leftMenu/icon-polityka.svg'
import LogOutImage from '../../UI/icons/leftMenu/icon-wyloguj.svg'
import CommunityImage from '../../UI/icons/leftMenu/icon-spolecznosc.svg'
import PanelAdmin from '../../UI/icons/leftMenu/icon-panelAdmina.svg'

import IconPensil from '../../UI/icons/icon-pencil.svg'

import EditUser from '../editUser/editUser'
import { NavLink } from 'react-router-dom'

const LoggedLeftMenu = props => {

    const currentUser = useSelector(state => state.firebase.profile)

    const [showEdit, setShowEdit] = useState(false);

    return (
        <div className={styles.LoggedLeftMenu}>
            <EditUser
                show={showEdit}
                close={() => setShowEdit(false)} />

            <div >
                <NavLink to="/"><img src={Logo} /></NavLink>
            </div>
            <ul>
                <li onClick={() => setShowEdit(true)}>
                    <img src={ProfileEdit} alt="edit profile icon" width="60px" height="60px" />
                    Edytuj Profil
                </li>
                <li>
                    <NavLink activeClassName={styles.LoggedLeftMenuActiveLink} to="/community">
                        <img
                            src={CommunityImage}
                            alt="community icon" width="60px" height="60px" />
                            Społeczność
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.LoggedLeftMenuActiveLink} to="/events">
                        <img
                            src={EventsImage}
                            alt="events icon" width="60px" height="60px" />
                        Wydarzenia
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.LoggedLeftMenuActiveLink} to="/aboutUs">
                        <img src={AboutUsImage} alt="about us icon" width="60px" height="60px" />
                    O nas
                    </NavLink>
                </li>
                <li style={{ border: "none" }}>
                    <NavLink activeClassName={styles.LoggedLeftMenuActiveLink} to="/politics">
                        <img src={PoliticImage} alt="politics icon" width="60px" height="60px" />
                    Polityka Prywatności
                    </NavLink>
                </li>
                {currentUser.czyAdmin &&
                    <li>
                        <NavLink activeClassName={styles.LoggedLeftMenuActiveLink} to="/adminPanel">
                            <img
                                src={PanelAdmin}
                                alt="notification icon" width="60px" height="60px" />
                        Panel Admina
                    </NavLink>
                    </li>
                }
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

import React from 'react';

import Info from '../../UI/icons/info.svg'

import styles from './navBar.module.css';
import { useSelector } from 'react-redux'


import { NavLink } from 'react-router-dom'
import DropMenuFilters from '../../components/dropMenuFilters/dropMenuFilters'
import DropMenuCites from '../../components/dropMenuCites/dropMenuCites'

const NavBar = props => {
    const currentUser = useSelector(state => state.firebase.profile)
    const uid = useSelector(state => state.firebase.auth.uid)

    const showPhoto = props => {
        if (!uid) return null;
        let photo;
        if (currentUser.zdjecie)
            photo = currentUser.zdjecie;
        else
            photo = 'https://paga.org.pl/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'

        return (
            <div className={styles.NavBarUserPhotoContainer}>
                <img src={photo} alt="user_photo icon" width="100%" height="100%" className={styles.NavBarAvatar} />
                <ol>
                    <li><b>{currentUser.nick}</b></li>
                    <li>{currentUser.imie}</li>
                </ol>
            </div>
        )
    }

    return (
        <div className={styles.NavBar}>
            {showPhoto()}
            <div className={styles.leftNavBar}>
                <DropMenuCites />
                <DropMenuFilters />
                <img src={Info} alt="info_image" width="38px" height="38px" />
            </div>
        </div>
    )
}

export default NavBar;
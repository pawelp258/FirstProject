import React from 'react'
import styles from './community.module.css'

import IconBack from '../../UI/icons/icon-back-black.svg'

import Chat from './chat/chat'
import FriendsList from './friendsList/friendsList'
import FriendEvent from './friendEvents/friendEvent'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Community = () => {

    const dispatch = useDispatch()

    return (
        <div className={styles.CommunityContainer}>
            <Link to="/">
                <img
                    src={IconBack}
                    alt="back icon"
                    className={styles.CommunityBackIcon}
                />
            </Link>
            <FriendsList />
            <FriendEvent />
            <Chat />
        </div>
    )
}

export default Community;
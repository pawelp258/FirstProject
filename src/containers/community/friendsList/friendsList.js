import React, { useState } from 'react'
import styles from './friendsList.module.css'

import Friends from './friends/friends'
import Invitations from './invitations/invitations'

const FriendsList = (props) => {

    const [friendsActive, setFriendsActive] = useState(true)

    return (
        <div className={styles.FriendListContainer}>
            <div style={{ display: "flex" }}>
                <div
                    className={friendsActive ? styles.FriendListSwitchActiveButton : styles.FriendListSwitchButton}
                    style={{ borderRadius: '15px 0 0 0' }}
                    onClick={() => setFriendsActive(true)}
                >Znajomi</div>
                <div
                    className={!friendsActive ? styles.FriendListSwitchActiveButton : styles.FriendListSwitchButton}
                    style={{ borderRadius: '0 15px 0 0' }}
                    onClick={() => setFriendsActive(false)}
                >Zaproszenia</div>
            </div>
            <div>
                {friendsActive ?
                    <Friends /> :
                    <Invitations />
                }
            </div>
        </div>
    )
}

export default FriendsList;
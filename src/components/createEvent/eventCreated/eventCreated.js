import React from 'react'

import styles from './eventCreated.module.css'

const EventCreated = props => {

    return (
        <div className={styles.eventCreatedContainer}>
            <div className={styles.eventCreatedHeader}>Twoje wydarzenie zostało utworzone!</div>
            <div className={styles.eventCreatedInfo}>
                Dostęp do niego masz poprzez
                zakładkę Społeczność, bądź z menu
                wydarzeń
            </div>
            <div
                className={styles.eventCreatedButton}
                type="button"
                onClick={() => props.close()}>
                OK
            </div>
        </div>
    )
}

export default EventCreated;
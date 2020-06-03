import React, { Component } from 'react'

import styles from './adminPanel.module.css'

import { connect } from 'react-redux'


// Dodać potem - this.props.current_user.czyAdmin - true -> ładować stronę, false -> przekierowanie do głównej

class AdminPanel extends Component {
    render() {

        return (
            <div className={styles.AdminPanelContainer}>
                admin panel
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        current_user: state.firebase.profile
    })
}

export default connect(mapStateToProps)(AdminPanel);
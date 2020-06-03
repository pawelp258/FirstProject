import React, { Component, Fragment } from 'react'

import styles from './blockedScreen.module.css'
import { connect } from 'react-redux'
import { updateProfile } from '../../store/actions/authActions'

import { Form, Field } from 'react-final-form'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import firebase from '../../config/fbConfig'

import Rozm from './rozm'

import { signOut } from '../../store/actions/authActions'

class BlockedScreen extends Component {

    state = {
        startDate: new Date(),
        nickWarning: ""
    }

    handleDateChange = date => {
        this.setState({
            ...this.state,
            startDate: date
        });
    };

    setNickWarning = warning => {
        this.setState({
            ...this.state,
            nickWarning: warning
        })
    }

    onSubmit = async values => {

        firebase.firestore().collection('uzytkownik').where('nick', '==', values.nick).get()
            .then(snapshot => {
                if (snapshot.empty) {
                    if (this.props.currentUser.dataUrodzenia)
                        this.props.updateProfile(this.props.userID, values, this.props.currentUser, this.props.currentUser.dataUrodzenia)
                    else
                        this.props.updateProfile(this.props.userID, values, this.props.currentUser, this.state.startDate)
                    this.setNickWarning("")
                    return;
                }
                else {
                    this.setNickWarning("Ten nick jest już zajęty.")
                    return;
                }
            }).catch(err => {
                this.setState({ ...this.state, nickWarning: err.message })
            })

    }



    render() {

        const required = value => (value ? undefined : 'To pole jest wymagane!')
        const composeValidators = (...validators) => value =>
            validators.reduce((error, validator) => error || validator(value), undefined)

        return (
            <div >
                <Rozm />
                <div className={styles.blokedScreenContainer}>
                    <h4>Prosimy o uzupełnienie danych</h4>
                    <p>W związku że jest to Twoje pierwsze logowanie
                    poprzez Facebook/Google prosimy o
                        uzupełnienie następujących danych</p>
                    <Form
                        onSubmit={this.onSubmit}
                        initialValues={{ sex: 'mezczyzna' }}
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                                {!this.props.currentUser.nick &&
                                    <Field name="nick"
                                        validate={required} >
                                        {({ input, meta }) => (
                                            <div>
                                                <input
                                                    {...input}
                                                    type="text"
                                                    placeholder="Nick"
                                                    className={styles.backDropFormInput} />
                                                {meta.error && meta.touched && <div className={styles.backDropError}>{meta.error}</div>}
                                            </div>
                                        )}
                                    </Field>
                                }
                                {!this.props.currentUser.plec &&
                                    <Field
                                        name="sex"
                                        component="select"
                                        className={styles.backDropFormInput}
                                        validate={composeValidators(required)}>
                                        <option value="mezczyzna">Mężczyzna </option>
                                        <option value="kobieta">Kobieta </option>
                                    </Field>
                                }
                                {!this.props.currentUser.dataUrodzenia &&
                                    <Fragment>
                                        <p className={styles.registerFormLabel}>Data Urodzenia: </p>
                                        <DatePicker
                                            className={styles.backDropFormInput}
                                            selected={this.state.startDate}
                                            onChange={this.handleDateChange}
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </Fragment>
                                }
                                <div className={styles.backDropError}>{this.state.nickWarning}</div>
                                <div className={styles.blockScreenConfirmButtons}>
                                    <button
                                        className={styles.blockScreenSubmitButton}
                                        style={{
                                            backgroundColor: "grey",
                                            color: 'black'
                                        }}
                                        onClick={() => this.props.signOut()} >
                                        Wyjdź
                                </button>
                                    <button
                                        className={styles.blockScreenSubmitButton}
                                        type="submit"
                                        disabled={submitting}>
                                        OK
                                </button>

                                </div>
                            </form>
                        )}
                    />
                </div>
            </div>


        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        updateProfile: (userID, newCreds, userData, birthDate) => dispatch(updateProfile(userID, newCreds, userData, birthDate)),
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(BlockedScreen);
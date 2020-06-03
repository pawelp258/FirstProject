import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './register.module.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Form, Field } from 'react-final-form'

import { signUp } from '../../../store/actions/authActions'
import { Redirect } from 'react-router-dom';


class Register extends Component {
    onSubmit = async values => {
        this.props.signUp(values, this.state.startDate)
    }

    state = {
        startDate: new Date()
    }

    handleDateChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {

        if (this.props.auth.uid)
            return <Redirect to="/" />;

        const required = value => (value ? undefined : 'To pole jest wymagane!')       
        const emailReg = value => (value && value.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/) ? undefined : `Niewłaściwy adres e-mail`);

        const shortPassword = value => (value.length < 6 ? 'Hasło musi mieć co najmniej 6 znaków!' : undefined)
        const composeValidators = (...validators) => value =>
            validators.reduce((error, validator) => error || validator(value), undefined)

        const comparePasswd = password => value => ((password !== value) ? 'Hasła różnią się!' : undefined);

        return (
            <div className={styles.RegisterContainer}>
                <Form
                    onSubmit={this.onSubmit}
                    initialValues={{ sex: 'mezczyzna' }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="email"
                                validate={composeValidators(required, emailReg)} >
                                {({ input, meta }) => (
                                    <div className={styles.registerFormField}>
                                        <input
                                            {...input}
                                            type="email"
                                            placeholder="E-mail"
                                            className={styles.registerFormInput} />
                                        {meta.error && meta.touched && <div className={styles.registerError}>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                            <Field name="password"
                                validate={composeValidators(required, shortPassword)} >
                                {({ input, meta }) => (
                                    <div className={styles.registerFormField}>
                                        <input
                                            {...input}
                                            type="password"
                                            placeholder="Hasło"
                                            className={styles.registerFormInput} />
                                        {meta.error && meta.touched && <div className={styles.registerError}>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                            <Field name="confirm"
                                validate={composeValidators(required, comparePasswd(values.password))} >
                                {({ input, meta }) => (
                                    <div className={styles.registerFormField}>
                                        <input
                                            {...input}
                                            type="password"
                                            placeholder="Powtórz hasło"
                                            className={styles.registerFormInput} />
                                        {meta.error && meta.touched && <div className={styles.registerError}>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                            <Field name="nick"
                                validate={required} >
                                {({ input, meta }) => (
                                    <div className={styles.registerFormField}>
                                        <input
                                            {...input}
                                            type="text"
                                            placeholder="Nick"
                                            className={styles.registerFormInput} />
                                        {meta.error && meta.touched && <div className={styles.registerError}>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                            <Field name="name"
                                validate={required} >
                                {({ input, meta }) => (
                                    <div className={styles.registerFormField}>
                                        <input
                                            {...input}
                                            type="name"
                                            placeholder="Imię"
                                            className={styles.registerFormInput} />
                                        {meta.error && meta.touched && <div className={styles.registerError}>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                            <div className={styles.registerFormField}>
                                    <Field
                                        name="sex"
                                        component="select"
                                        className={styles.registerFormInput}
                                        validate={composeValidators(required)}>
                                        <option value="mezczyzna">Mężczyzna </option>
                                        <option value="kobieta">Kobieta </option>
                                    </Field>
                            </div>
                            <div className={styles.registerFormField}>
                                <label className={styles.registerFormLabel}>Data Urodzenia: </label>
                                <DatePicker
                                    className={styles.registerFormDataPicker}
                                    selected={this.state.startDate}
                                    onChange={this.handleDateChange}
                                    dateFormat="dd/MM/yyyy"
                                />
                            </div>
                                {this.props.authError && <div className={styles.registerError}>{this.props.authError}</div>}
                            <button
                                className={styles.registerSubmitButton}
                                type="submit"
                                disabled={submitting}>
                                Zarejestruj
                                </button>

                        </form>
                    )}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (newUser, birthDate) => dispatch(signUp(newUser, birthDate))
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);


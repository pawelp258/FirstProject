import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signInFacebook } from '../../../store/actions/authActions';
import { Form, Field } from 'react-final-form';

import styles from './logIn.module.css';

import firebase from 'firebase/app'

import FacebookIcon from '../../../UI/icons/facebook-icon.svg'

class LogIn extends Component {

    state = {
        showForgotPassword: false,
        email: '',
        sendPasswordReset: false,
        sendPasswordResetError: null
    }

    showForgotPasswordHandler = () => {
        this.setState({
            ...this.state,
            showForgotPassword: !this.state.showForgotPassword,
        })
    }

    forgotPasswordHandler = () => {
        console.log(this.state.email)
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                this.setState({
                    ...this.state,
                    sendPasswordResetError: null,
                    sendPasswordReset: true
                })
            }).catch((error) => {
                console.log(error)
                this.setState({
                    ...this.state,
                    sendPasswordResetError: error.message,
                    sendPasswordReset: true
                })
            })

    }

    emailForgotPasswordChange = (e) => {
        this.setState({
            ...this.state,
            email: e.target.value
        })
    }

    onSubmit = async values => {
        this.props.signIn({
            email: values.email,
            password: values.password
        });
    }

    clearLogIn = () => {
        this.setState({
            showForgotPassword: false,
            email: '',
            sendPasswordReset: false,
            sendPasswordResetError: null
        });

    }

    render() {

        const { authError } = this.props;

        return (
            <React.Fragment>
                <div className={styles.loginContainer}>
                    <Form
                        onSubmit={this.onSubmit}
                        validate={values => {
                            const errors = {}
                            if (!values.email)
                                errors.email = '';
                            if (!values.password) {
                                errors.password = ''
                            }
                            return errors;
                        }}
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit} ref={form => this.loginForm = form}>
                                <Field name="email">
                                    {({ input, meta }) => (
                                        <div className={styles.loginDivInput}>
                                            <input
                                                {...input}
                                                type="text"
                                                placeholder="E-mail"
                                                className={styles.loginInput} />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="password">
                                    {({ input, meta }) => (
                                        <div className={styles.loginDivInput}>
                                            <input
                                                {...input}
                                                type="password"
                                                placeholder="Password"
                                                className={styles.loginInput} />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>


                                <button type="submit" disabled={submitting} className={styles.loginSubmitButton}>
                                    Zaloguj się
                                </button>
                                {authError ? <p className={styles.loginError}>{authError}</p> : null}
                            </form>
                        )}
                    />

                    <div className={styles.loginBorder}></div>

                    <div
                        className={styles.loginFacebookButton}
                        onClick={() => this.props.signInFacebook()}>
                        <img src={FacebookIcon} alt="Facebook icon" width="20px" height="20px" style={{ marginRight: "10px" }} />
                        Użyj konta Facebook
                    </div>

                    <div className={styles.loginForgotPasswordButton}>
                        <span
                            className={styles.loginForgotPassword}
                            onClick={this.showForgotPasswordHandler}
                        > Zapomniałem hasła
                        </span>
                        {this.state.showForgotPassword ?
                            <div style={{ margin: '10px' }}>
                                <input className={styles.loginInput}
                                    type="email"
                                    placeholder="E-mail"
                                    onChange={(e) => this.emailForgotPasswordChange(e)}
                                    style={{ height: '35px', width: '80%' }} />
                                <input className={styles.loginSubmitButton}
                                    type="button" value="Przypomnij hasło"
                                    onClick={this.forgotPasswordHandler}
                                    style={{ marginTop: '10px', height: '35px', width: '80%' }} />
                                {
                                    this.state.sendPasswordReset ?
                                        (!this.state.sendPasswordResetError ?
                                            <div >{`Email został wysłany.`}</div> :
                                            <div style={{ color: 'red', marginTop: '10px' }}>{this.state.sendPasswordResetError}</div>
                                        ) : null
                                }
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
        signInFacebook: () => dispatch(signInFacebook())
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
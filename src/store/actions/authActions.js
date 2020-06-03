import firebase from 'firebase/app';
import * as actions from '../actions/actionTypes'
import { PasswordModal } from '../../UI/popups/askAboutPassword/askAboutPassword'

export const signIn = credentials => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((result) => {
            console.log('result', result)
            dispatch({
                type: actions.LOGIN_SUCCESS,
            })
        }).catch(err => {
            let message;
            if(err.code === 'auth/user-not-found')
                message = 'Nie ma takiego użytkownika.'
            else if(err.code === 'auth/wrong-password')
                message = 'Złe hasło.'
            else if(err.code === 'auth/invalid-email')
                message = 'Zły format adresu e-mail.'
            else
                message = 'Nieznany błąd.'
                
            console.log(err)
            dispatch({
                type: actions.LOGIN_ERROR,
                message
            })
        })
    }
}

export const signInFacebook = () => {
    return (dispatch, getState) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('user_hometown');
        firebase.auth().languageCode = 'pl_PL';

        firebase.auth().signInWithPopup(provider).then(function (result) {
            const userInfo = result.additionalUserInfo.profile;

            if (result.additionalUserInfo.isNewUser) {

                let userBirthDate;
                if (userInfo.birthday) {
                    userBirthDate = userInfo.birthday
                }
                else userBirthDate = null;

                let picture;
                if (userInfo.picture.data.url)
                    picture = userInfo.picture.data.url;
                else
                    picture = 'https://paga.org.pl/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'

                firebase.firestore().collection("uzytkownik").doc(result.user.uid).set({
                    ban: false,
                    czyAdmin: false,
                    email: userInfo.email,
                    imie: userInfo.first_name,
                    nick: null,
                    plec: null,
                    dataUrodzenia: userBirthDate,
                    zdjecie: picture,
                    typ_logowania: 'facebook',
                    isBlocked: true
                })
            }

            console.log(result)
            dispatch({
                type: actions.LOGIN_SUCCESS
            })
        }).catch(error => {
            if (error.code === 'auth/account-exists-with-different-credential') {
                const pendingCred = error.credential;
                const email = error.email;
                firebase.auth().fetchSignInMethodsForEmail(email).then((methods) => {
                    //jesli login i haslo
                    if(methods[0] === 'password') {
                        console.log("he")
                        PasswordModal().then((password) => {
                            if(password)
                                firebase.auth().signInWithEmailAndPassword(email, password).then(function(userCredential) {
                                    return userCredential.user.linkWithCredential(pendingCred);
                                })
                        })
                        return ;
                    }
                    if(methods[0] === 'google.com')
                        console.log('google')
                let provider1 = new firebase.auth.GoogleAuthProvider();   
                firebase.auth().signInWithPopup(provider1).then(function(result) {
                    console.log("good")
                    result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function(usercred) {
                    });
                }).catch(err => {
                    console.log("e  rror popup2", err.message)
                })

                })
            }
            dispatch({
                type: actions.LOGIN_ERROR,
                error
            })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut()
            .then(() => {
                dispatch({
                    type: actions.SIGNOUT_SUCCESS
                })
            })
    }
}

export const signUp = (newUser, birthDate) => {
    return (dispatch, getState) => {

        firebase.firestore().collection('uzytkownik').where('nick', '==', newUser.nick).get()
            .then(snapshot => {
                if (snapshot.empty) {
                    firebase.auth().createUserWithEmailAndPassword(
                        newUser.email,
                        newUser.password
                    ).then((resp) => {
                        let newBirthDate = birthDate.getDate() + "/" + (birthDate.getMonth() + 1) + "/" + birthDate.getFullYear();
                        firebase.firestore().collection("uzytkownik").doc(resp.user.uid).set({
                            ban: false,
                            czyAdmin: false,
                            email: newUser.email,
                            imie: newUser.name,
                            nick: newUser.nick,
                            plec: newUser.sex,
                            dataUrodzenia: newBirthDate,
                            zdjecie: 'https://paga.org.pl/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
                            typ_logowania: 'standard',
                            isBlocked: false
                        })
                    }).then(() => {
                        dispatch({ type: actions.SIGNUP_SUCCESS });
                    }).catch((err) => {
                        let error;
                        if (err.code === 'auth/email-already-in-use')
                            error = 'Adres e-mail jest już w użyciu!'
                        dispatch({ type: actions.SIGNUP_ERROR, error })
                    })
                } else {
                    let error = 'Ten nick jest już zajęty!'
                    dispatch({ type: actions.SIGNUP_ERROR, error })
                }
            })

    }
}


//block screen update data
export const updateProfile = (userID, newCreds, userData, birthDate) => {
    return (dispatch, getState) => {
        console.log(userData)

        if (userData.nick)
            newCreds = {
                ...newCreds,
                nick: userData.nick
            }
        if (userData.dataUrodzenia)
            birthDate = new Date(userData.dataUrodzenia)

        if (userData.plec)
            newCreds = {
                ...newCreds,
                plec: userData.plec
            }

        let newBirthDate = birthDate.getDate() + "/" + (birthDate.getMonth() + 1) + "/" + birthDate.getFullYear();
        firebase.firestore().collection("uzytkownik").doc(userID).update({
            nick: newCreds.nick,
            plec: newCreds.sex,
            dataUrodzenia: newBirthDate,
            isBlocked: false
        }).then(() => {
            dispatch({ type: actions.UPDATE_PROFILE_SUCCESS });
        }).catch((err) => {
            dispatch({ type: actions.UPDATE_PROFILE_FAILED, err })
        })
    }
}


/*





*/
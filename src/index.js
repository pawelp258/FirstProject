import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { reduxFirestore, createFirestoreInstance } from 'redux-firestore';

import thunk from 'redux-thunk'
import firebaseConfig from './config/fbConfig'
import firebase from 'firebase/app'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase'

import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

import DotLoader from "react-spinners/DotLoader";


const store = createStore(
        rootReducer,
        compose(
                applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
                reduxFirestore(firebase, firebaseConfig)
        )
)


const profileSpecificProps = {
        userProfile: 'uzytkownik',
        useFirestoreForProfile: true
}

const rrfProps = {
        firebase,
        config: firebaseConfig,
        config: profileSpecificProps,
        dispatch: store.dispatch,
        createFirestoreInstance
}
const AuthIsLoaded = ({ children }) => {
        const auth = useSelector(state => state.firebase)
        if (!isLoaded(auth.auth)) {
                return (
                        <div style={{
                                backgroundColor: "#2C383E",
                                height: "100vh",
                                width: "100vw",
                                margin: '-61px 0 0 -230px',
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                        }}>
                                <DotLoader
                                        size={60}
                                        color={"#69B4D6"}
                                        loading='true'
                                />
                        </div>
                );
        }
        return children
}



const app = (
        <BrowserRouter>
                <Provider store={store}>
                        <ReactReduxFirebaseProvider {...rrfProps}>
                                <AuthIsLoaded>
                                        <App />
                                </AuthIsLoaded>
                        </ReactReduxFirebaseProvider>
                </Provider>
        </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();

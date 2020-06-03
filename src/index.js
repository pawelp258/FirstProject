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

const store = createStore(
        rootReducer,
        compose(
                applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
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
        if (!isLoaded(auth.auth)) return <div>splash screen...</div>;
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

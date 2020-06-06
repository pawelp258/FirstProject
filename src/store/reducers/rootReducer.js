import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

import friendReducer from './friendReducer'
import authReducer from './authReducer'
import mapReducer from './mapReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    mapRedux: mapReducer,
    friend: friendReducer
})

export default rootReducer;
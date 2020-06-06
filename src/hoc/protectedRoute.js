import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedRoute = ({ component: Component, auth, location, ...rest }) => {
    // const auth = useSelector(state => state.firebase.auth)
    return (
        <Route {...rest} render={(props) => (
            auth.uid ?
                <Component {...props} /> :
                <Redirect to="/" />
        )} />
    );
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ProtectedRoute)
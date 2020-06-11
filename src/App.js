import React, { Fragment } from 'react';
import './App.css';

import { connect } from 'react-redux'

import NavBar from './containers/navBar/navBar'
import LoggedLeftMenu from './containers/loggedLeftMenu/loggedLeftMenu'
import UnLoggedLeftMenu from './containers/unLoggedLeftMenu/unLoggedLeftMenu'
import Events from './containers/events/events'
import Objects from './containers/objects/objects'
import Community from './containers/community/community'
import AdminPanel from './containers/adminPanel/adminPanel'
import { Switch, Route } from 'react-router-dom'
import ModalContainer from 'react-modal-promise'

import ProtectedRoute from './hoc/protectedRoute'

import BlockedScreen from './components/blockedScreen/blockedScreen'
import EventInfo from './components/eventInfo/eventInfo'
import Politics from './components/politics/politics';

function App(props) {

  return (
    <div className="App">
      <Fragment>
        {props.auth.uid ? null : <ModalContainer />}
        {(props.auth.uid) && (props.user.isBlocked) ?
          <BlockedScreen currentUser={props.user} userID={props.auth.uid} />
          :
          null}
        <NavBar />
        <main>
          {(props.auth.uid) ? (<LoggedLeftMenu />) : <UnLoggedLeftMenu />}
          <Switch>
            <Route exact path="/">
              <Objects />
            </Route>
            <ProtectedRoute path="/events/:id" component={EventInfo} />
            <Route path="/events" component={Events} />
            <ProtectedRoute path="/community" component={Community} />
            <Route path="/politics" component={Politics} />
            {props.user.czyAdmin && <ProtectedRoute path="/adminPanel" component={AdminPanel} />}
            <Route path="/">
              <div style={{
                fontSize: "52px",
                margin: 'auto auto',
                height: "calc(100vh - 61px)",
                lineHeight: "calc(100vh - 61px)"
              }}>Nie znaleziono strony.</div>
            </Route>
          </Switch>
        </main>
      </Fragment>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    auth: state.firebase.auth,
    user: state.firebase.profile
  });
}

export default connect(mapStateToProps)(App);


/*
        { !props.auth.uid ? <UnLoggedNavBar /> : <LoggedNavBar /> }
*/
/*

*/
import React, { Component } from 'react'

import LogInPanel from '../../containers/logInPanel/logInPanel'

import styles from './unLoggedLeftMenu.module.css'

import Logo from '../../UI/icons/Logo.svg'


import EventsImage from '../../UI/icons/leftMenu/icon-wydarzenia.svg'

import AboutUsImage from '../../UI/icons/leftMenu/icon-onas.svg'
import PoliticImage from '../../UI/icons/leftMenu/icon-polityka.svg'
import LogiInIcon from '../../UI/icons/leftMenu/icon-zaloguj.svg'

import { NavLink } from 'react-router-dom'


class UnloggedLeftMenu extends Component {

    state = {
        showLogin: false
    }

    showLoginHandler = () => {
        this.setState({ showLogin: true });
    }

    hideLoginHandler = () => {
        this.setState({ showLogin: false });
    }

    render() {
        return (
            <div className={styles.UnLoggedLeftMenu}>
                <LogInPanel
                    show={this.state.showLogin}
                    close={this.hideLoginHandler} />

                <div>
                    <NavLink to="/"><img src={Logo} /></NavLink>
                </div>
                <ul>
                    <li onClick={this.showLoginHandler} >
                        <img src={LogiInIcon} alt="log in icon" width="60px" height="60px" />
                        Zaloguj się
                    </li>
                    <li>
                        <NavLink activeClassName={styles.UnLoggedLeftMenuActiveLink} to="/events">
                            <img
                                src={EventsImage}
                                alt="events icon" width="60px" height="60px" />
                            Wydarzenia
                        </NavLink>
                    </li>
                    <li>
                        <img src={AboutUsImage} alt="about us icon" width="60px" height="60px" />
                        O nas
                    </li>
                    <li>
                        <img src={PoliticImage} alt="politic icon" width="60px" height="60px" />
                        Polityka Prywatności
                    </li>
                </ul>
            </div>
        );
    }
}

export default UnloggedLeftMenu;
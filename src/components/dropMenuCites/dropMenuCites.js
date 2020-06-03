import React, { useState, useRef } from 'react'

import styles from './dropMenuCites.module.css'
import { connect } from 'react-redux'

import { setCity, setSelectedItem } from '../../store/actions/mapActions'

import CityIcon from '../../UI/icons/icon-city.svg'

import useOnClickOutside from '../../hooks/useOnClickOutside'

const DropMenuCites = props => {

    const ref = useRef();
    const [showMenu, setShowMenu] = useState(false);

    useOnClickOutside(ref, () => setShowMenu(false));

    const changeCity = new_city => {
        props.setCity(new_city);
        props.setSelectedItem(null);
    }

    const content = (
        <div className={styles.dropMenuCitesContent}>    
            <ol>
                <li onClick={() => changeCity({
                    name:"Toruń",
                    coords: { lat: 53.01, lng: 18.61 }
                    })}>Toruń</li>
                <li onClick={() => changeCity({
                    name:"Bydgoszcz",
                    coords: { lat: 53.1234804, lng: 18.0084378 }
                    })}>Bydgoszcz</li>
            </ol>
        </div>
    )

    return (
        <div className={styles.dropMenuCitesContainer }   ref={ref}>
            <div onClick={()=>setShowMenu(!showMenu)}>
                <img src={CityIcon} alt="city icon" width="30px" height="30px" style={{margin:'0px 5px 0px 0px'}}/>
                {props.current_city.name}
            </div>
            {   
                showMenu ? content : null
            }
        </div>
    )  
}

const mapStateToProps = state => {
    return {
        current_city: state.mapRedux.city
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCity: value => dispatch(setCity(value)),
        setSelectedItem: (item) => dispatch(setSelectedItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropMenuCites);
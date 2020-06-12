import React, { Component } from 'react'

import styles from './objectsMap.module.css'

import { connect } from 'react-redux'
import { getObjects, setSelectedItem } from '../../../store/actions/mapActions'


import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker
} from "react-google-maps";

import GreenMarker from '../../../UI/icons/markers/green_marker.svg'
import BlueMarker from '../../../UI/icons/markers/blue_marker.svg'
import RedMarker from '../../../UI/icons/markers/red_marker.svg'
import OrangeMarker from '../../../UI/icons/markers/orange_marker.svg'


class ObjectsMap extends Component {


    componentDidMount = () => {
        this.props.getObjects();
    }

    setIcon = type => {
        if (type[0] && this.props.filters['basen'].active)
            return BlueMarker;
        if (type[2] && this.props.filters['pilka_nozna'].active)
            return GreenMarker;
        if (type[1] && this.props.filters['koszykowka'].active)
            return RedMarker;
        if (type[3] && this.props.filters['pilka_reczna'].active)
            return OrangeMarker;
        if (type[4] && this.props.filters['siatkowka'].active)
            return OrangeMarker;
        if (type[5] && this.props.filters['tenis'].active)
            return RedMarker;
    }

    render() {
        return (
            <div className={styles.ObjectMapsContainer}>
                <GoogleMap
                    center={this.props.city.coords}
                    zoom={13}>
                    {this.props.objects && this.props.objects.map(marker => (
                        ((marker.typ_obiektu[0] && this.props.filters['basen'].active) ||
                            (marker.typ_obiektu[1] && this.props.filters['koszykowka'].active) ||
                            (marker.typ_obiektu[2] && this.props.filters['pilka_nozna'].active) ||
                            (marker.typ_obiektu[3] && this.props.filters['pilka_reczna'].active) ||
                            (marker.typ_obiektu[4] && this.props.filters['siatkowka'].active) ||
                            (marker.typ_obiektu[5] && this.props.filters['tenis'].active))
                        &&
                        marker.miasto === this.props.city.name
                        &&
                        <Marker
                            key={marker.id}
                            position={{
                                lat: marker.koordynaty[0],
                                lng: marker.koordynaty[1]
                            }}
                            onClick={() => { this.props.setSelectedItem(marker) }}
                            icon={{
                                url: this.setIcon(marker.typ_obiektu)
                            }}
                        />
                    ))}
                </GoogleMap>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getObjects: () => dispatch(getObjects()),
        setSelectedItem: (item) => dispatch(setSelectedItem(item))
    }
}

const mapStateToProps = state => {
    return {
        objects: state.mapRedux.objectsMap,
        filters: state.mapRedux.filters,
        selectedItem: state.mapRedux.selectedObject,
        city: state.mapRedux.city
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withScriptjs(withGoogleMap(ObjectsMap)));

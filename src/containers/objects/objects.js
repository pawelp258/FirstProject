import React, { Component } from 'react'

import styles from './objects.module.css'

import ObjectsMap from './objectsMap/objectsMap'
import ObjectInfo from './objectInfo/objectInfo'

class Objects extends Component {
    
    render () {
        return (
            <div className={styles.Objects}>
                <ObjectsMap 
                    setSelectedItem={(item) => this.setSelectedItem(item) }
                    googleMapURL={APIKEY}  
                    loadingElement={<div style={{ height: `calc(100vh - 61px)` }} />}
                    containerElement={<div style={{ height: `calc(100vh - 61px)` }} />}
                    mapElement={<div style={{ height: `calc(100vh - 61px)` }} />}
                />     
                <ObjectInfo />       
            </div>
        )}
}

export default Objects;
import React, { Component } from 'react'

import styles from './objectFilters.module.css'

import ObjectFiltersElement from './objectFiltersElement/objectFiltersElement'

import { connect } from 'react-redux'
import { setFilters } from '../../store/actions/mapActions'
import IconBack from '../../UI/icons/icon-back.svg'

class ObjectFilters extends Component {


    changeFilterHandler = (key, el) => {
        this.props.setFilters(el, key, this.props.filters);
    }

    render () {
        return (
        <div className={styles.objectFiltersContainer}>
            <img src={IconBack} alt="Back Icon" className={styles.objectFiltersIconBack} onClick={()=>this.props.setShowMenu()}/>  
            <div className={styles.objectFiltersHeader}>Filtrowanie</div>
            <div className={styles.objectFiltersText}>
                Wybierz sporty które chcesz uprawiać, a mapa zostanie zaktualizowana o Twoje preferencje
                </div>

            {Object.entries(this.props.filters).map(([key, el])=> {
                return(
                    <ObjectFiltersElement 
                        key={key} 
                        id={key}
                        object={el}
                        changeFilterHandler={(x, y) => (this.changeFilterHandler(x, y))}
                        />
                )
            })}
        </div>
    );}
}

const mapDispatchToProps = dispatch => {
    return {
        setFilters: (el, key, filters) => dispatch(setFilters(el, key, filters))
    }
}

const mapStateToProps = state => {
    return {
        filters: state.mapRedux.filters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ObjectFilters);




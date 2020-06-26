import React, { useState, useRef } from 'react'

import styles from './dropMenuFilters.module.css'

import Filters from '../../UI/icons/filters.svg'

import useOnClickOutside from '../../hooks/useOnClickOutside'
import ObjectFilters from '../../containers/objectFilters/objectFilters'

const DropMenuFilters = props => {

    const ref = useRef();
    const [showMenu, setShowMenu] = useState(false);

    useOnClickOutside(ref, () => setShowMenu(false));



    const content = (
        <ObjectFilters setShowMenu={() => setShowMenu(!showMenu)} />
    )

    return (
        <div className={styles.dropMenuFiltersContainer} ref={ref}>
            <img
                src={Filters}
                alt="filters_image"
                width="40px" height="40px"
                onClick={() => setShowMenu(!showMenu)}
                style={{ cursor: "pointer" }} />
            {
                showMenu ? content : null
            }
        </div>
    )
}

export default DropMenuFilters;
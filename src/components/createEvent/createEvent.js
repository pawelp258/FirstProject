import React, {  useState, Fragment } from 'react'

import styles from './createEvent.module.css'

import black from '../../images/black.jpg'

import BackIcon from '../../UI/icons/createEvent/icons-back.svg'

import moment from 'moment';

import CreateEventForm from './createEventForm/createEventForm'
import CreateEventConfirm from './createEventConfirm/createEventConfirm'

import { connect } from 'react-redux'

import Backdrop from '../../UI/Backdrop/Backdrop'

import EventCreated from './eventCreated/eventCreated'

const CreateEvent = props => {

    // true - CreateEventForm, false - CreateEventConfirm
    const [showEventForm, setShowEventForm] = useState(true)
    const [values, setValues] = useState({
        startTime: moment(),
        endTime: moment(),
        sport: "Basen",
        nameEvent: "",
        limitEvent: "",
        describeEvent: "",
        phone: ""
    })

    return (
        <div className={styles.createEventContainer}>
            <Backdrop show={true} close={props.close} />
            {props.showEventCreated ?
                <EventCreated close={props.close}/>
                :
                <Fragment>
                    <div
                        style={{ backgroundImage: `url(${props.object.zdjecie})` }}
                        className={styles.createEventPhoto}>
                        <img src={black} alt="black_image" className={styles.createEventShadow} />
                        <img src={BackIcon} alt="back icon" className={styles.createEventBackIcon} onClick={props.close} />
                        <div className={styles.createEventName}>{props.object.nazwa_wlasna}</div>
                        <div className={styles.createEventInfo}>
                            {!props.object.platnosc ?
                                <div style={{ float: 'left' }}>Wstęp darmowy</div>
                                :
                                <div style={{ float: 'left' }}>Wstęp nie darmowy</div>}
                            <div style={{ float: 'right', textAlign: "right", marginRight: "15px" }}>
                                <div>{props.object.ulica}</div>
                                <div>{props.object.kod_pocztowy} {props.object.miasto}</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.createEventInputSection}>
                        {showEventForm ?
                            <CreateEventForm
                                confirm={() => setShowEventForm(false)}
                                setValues={(values) => setValues(values)}
                                date={props.date}
                                data={values}
                            />
                            :
                            <CreateEventConfirm
                                values={values}
                                back={() => setShowEventForm(true)}
                                finishCreate={props.finishCreate} />
                        }
                    </div>
                </Fragment>
            }
        </div>
    )

}

const mapStateToProps = state => {
    return ({
        object: state.mapRedux.selectedObject
    })
}

export default connect(mapStateToProps)(CreateEvent);


import React, { useState, Fragment, useCallback, useEffect } from 'react'
import styles from './objectInfo.module.css'
import { useSelector, useDispatch } from 'react-redux'

import iconCalendar from '../../../UI/icons/objectInfo/icon-calendar.svg'
import iconMoneyBag from '../../../UI/icons/objectInfo/icon-moneybag.svg'
import iconLocation from '../../../UI/icons/objectInfo/icon-location.svg'
import iconPhone from '../../../UI/icons/objectInfo/icon-phone.svg'
import iconTime from '../../../UI/icons/objectInfo/icon-time.svg'
import arrowUp from '../../../UI/icons/objectInfo/arrow-up.svg'
import arrowDown from '../../../UI/icons/objectInfo/arrow-down.svg'

import IconBack from '../../../UI/icons/icon-back.svg'

import { setSelectedItem } from '../../../store/actions/mapActions'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../../css/objectInfo_calendar.css'

import CreateEvent from '../../../components/createEvent/createEvent'
import CalendarInfo from './calendarInfo/calendarInfo'

const ObjectInfo = props => {

    // czy uzytkownik jest zalogowany ?
    const isLogged = useSelector(state => state.firebase.auth.uid)

    const [days] = useState(['Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'Sb', 'Nd'])

    // dzisiejsza data
    const [currentDay, setCurrentDay] = useState(new Date())

    // obsługa wyświetlania kalendarza, godzin otwarcia
    const [showOpenHours, setShowOpenHours] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false)

    // wyświetlenie tworzenia wydarzenia lub komunikatu o utworzeniu po zakończeniu procesu
    const [showCreateEvent, setShowCreateEvent] = useState(false);
    const [showEventCreated, setShowEventCreated] = useState(false);

    // true - inforamcje o dniu, false - kalendarz
    const [showInfoCalendar, setShowInfoCalendar] = useState(false);

    // akutalnie wybrany obiekt z mapy
    const object = useSelector(state => state.mapRedux.selectedObject)
    const dispatch = useDispatch();

    useEffect(() => {
        setShowInfoCalendar(false)
    }, [object])

    if (!object)
        return null;
    return (
        <Fragment>
            {(isLogged && showCreateEvent) ?
                <CreateEvent date={currentDay}
                    close={() => { setShowCreateEvent(false); setShowEventCreated(false) }}
                    finishCreate={() => setShowEventCreated(true)}
                    showEventCreated={showEventCreated} />
                : null}
            <div className={styles.ObjectInfoContainer}>
                <img src={IconBack} alt="Back Icon" className={styles.ObjectInfoIconBack} onClick={() => dispatch(setSelectedItem(null))} />
                <div style={{ width: "310px", height: "calc(30vh - 2px)" }}>
                    <img src={object.zdjecie} alt="object_photo" height="100%" width="100%" />
                </div>
                <div className={styles.ObjectInfoInformations}>
                    <p style={{ fontSize: "18px" }}><b>{object.nazwa_wlasna}</b></p>
                    <p>{object.opis}</p>
                    <div className={styles.ObjectInfoInformationsFrame}>

                        <div className={styles.ObjectInfoInformation}>
                            <img src={iconCalendar} alt="calendar icon" width="30px" height="30px" />
                            <div className={styles.ObjectInfoSpan}>Kalendarz obiektu
                            {showCalendar ?
                                    <img src={arrowUp} alt="arrow up icon" className={styles.ObjectInfoShowArrow} onClick={() => setShowCalendar(false)} /> :
                                    <img src={arrowDown} alt="arrow down icon" className={styles.ObjectInfoShowArrow} onClick={() => setShowCalendar(true)} />
                                }
                            </div>
                        </div>
                        {showCalendar ?
                            (showInfoCalendar ?
                                <CalendarInfo
                                    date={currentDay}
                                    close={() => setShowInfoCalendar(false)}
                                />
                                :
                                <Calendar
                                    className="objectInfoCalendar"
                                    onChange={date => { setCurrentDay(date); setShowInfoCalendar(true) }}
                                    value={currentDay}
                                />
                            )
                            : null}
                        <div className={styles.ObjectInfoInformation}>
                            <img src={iconTime} alt="time icon" width="30px" height="30px" />
                            <div className={styles.ObjectInfoSpan}>
                                Godziny otwarcia

                                {showOpenHours ?
                                    <img src={arrowUp} alt="arrow up icon" className={styles.ObjectInfoShowArrow} onClick={() => setShowOpenHours(false)} /> :
                                    <img src={arrowDown} alt="arrow down icon" className={styles.ObjectInfoShowArrow} onClick={() => setShowOpenHours(true)} />
                                }

                                {showOpenHours && object.godziny_otwarcia.map((item, i) => {
                                    return (<div key={i}>{days[i]}: {item}</div>);
                                })}
                            </div>
                        </div>

                        <div className={styles.ObjectInfoInformation}>
                            <img src={iconLocation} alt="location icon" width="30px" height="30px" />
                            <div className={styles.ObjectInfoSpan}>
                                <div>{object.ulica}</div>
                                <div>{object.miasto} {object.kod_pocztowy}</div>
                            </div>
                        </div>

                        <div className={styles.ObjectInfoInformation}>
                            <img src={iconMoneyBag} alt="money bag icon" width="30px" height="30px" />
                            <div className={styles.ObjectInfoSpan}>Cena wstępu</div>
                        </div>

                        {object.nr_kontaktowy ?
                            <div className={styles.ObjectInfoInformation}>
                                <img src={iconPhone} alt="phone icon" width="30px" height="30px" />
                                <div className={styles.ObjectInfoSpan}>+48 {object.nr_kontaktowy}</div>
                            </div>
                            :
                            null
                        }

                    </div>
                </div>
                {isLogged ?
                    <input
                        type="button"
                        className={styles.ObjectInfoCreateEventButton}
                        value="UTWÓRZ WYDARZENIE"
                        onClick={() => setShowCreateEvent(true)} />
                    :
                    null}
            </div>
        </Fragment>
    )
}

export default ObjectInfo;
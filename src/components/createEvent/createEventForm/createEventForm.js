import React, { Component, Fragment } from 'react'

import { Form, Field } from 'react-final-form'

import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

import styles from './createEventForm.module.css'

import CalendarIcon from '../../../UI/icons/createEvent/icon-calendar.svg'
import PeopleIcon from '../../../UI/icons/createEvent/icon-ludzik.svg'
import DescribeIcon from '../../../UI/icons/createEvent/icon-opis.svg'
import SportIcon from '../../../UI/icons/createEvent/icon-sport.svg'
import TimeIcon from '../../../UI/icons/createEvent/icon-time.svg'
import NameIcon from '../../../UI/icons/createEvent/icon-name.svg'
import PhoneIcon from '../../../UI/icons/createEvent/icon-phone.svg'

class CreateEventForm extends Component {

    state = {
        startTime: null,
        endTime: null
    }

    setStartTime = time => {
        const new_time = time;

        this.setState({
            ...this.state,
            startTime: new_time
        })
    }

    setEndTime = time => {
        const new_time = time;

        this.setState({
            ...this.state,
            endTime: new_time
        })
    }

    onSubmit = values => {
        let new_startTime;
        if (!this.state.startTime)
            new_startTime = this.props.data.startTime;
        else
            new_startTime = this.state.startTime;

        let new_endTime;
        if (!this.state.endTime)
            new_endTime = this.props.data.endTime;
        else
            new_endTime = this.state.endTime;

        if(!values.phone)
            values.phone = null;

        const event = {
            nameEvent: values.nameEvent,
            limitEvent: values.limitEvent,
            describeEvent: values.describeEvent,
            sport: values.sportEvent,
            startTime: new_startTime,
            endTime: new_endTime,
            date: values.dateEvent,
            phone: values.phone
        }
        this.props.setValues(event)
        this.props.confirm()
    }

    render() {


        const required = value => (value ? undefined : 'Ta wartość jest wymagana!')

        const mustBeNumber = value => (isNaN(value) ? 'Wartość nie jest liczbą!' : undefined)

        const minValue = value =>
            isNaN(value) || value >= 0 ? undefined : `Wartość nie może być ujemna!`


        const composeValidators = (...validators) => value =>
            validators.reduce((error, validator) => error || validator(value), undefined)
        return (
            <div className={styles.createEventFormContainer}>
                <span style={{ fontSize: '24px' }}>Utwórz wydarzenie</span>
                <Form
                    onSubmit={this.onSubmit}
                    initialValues={{
                        nameEvent: this.props.data.nameEvent,
                        limitEvent: this.props.data.limitEvent,
                        describeEvent: this.props.data.describeEvent,
                        sportEvent: this.props.data.sport,
                        dateEvent: `${this.props.date.getDate()}/${this.props.date.getMonth() + 1}/${this.props.date.getFullYear()}`,
                        phone: this.props.data.phone
                    }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="nameEvent"
                                validate={composeValidators(required)} >
                                {({ input, meta }) => (
                                    <Fragment>
                                        <div className={styles.createEventFormField}>
                                            <label className={styles.createEventFormLabel}>
                                                <img src={NameIcon} alt="Name icon" className={styles.createEventFormIcon} />
                                            </label>
                                            <input
                                                {...input}
                                                type="text"
                                                placeholder="Nazwa wydarzenia"
                                                className={styles.createEventFormInput} />
                                        </div>
                                        {meta.error && meta.touched && <div className={styles.createEventError}>{meta.error}</div>}
                                    </Fragment>
                                )}
                            </Field>
                            <Field name="limitEvent"
                                validate={composeValidators(required, mustBeNumber, minValue)} >
                                {({ input, meta }) => (
                                    <Fragment>
                                        <div className={styles.createEventFormField}>
                                            <label className={styles.createEventFormLabel}>
                                                <img src={PeopleIcon} alt="Limit icon" className={styles.createEventFormIcon} />
                                            </label>
                                            <input
                                                {...input}
                                                type="text"
                                                placeholder="Limit miejsc"
                                                className={styles.createEventFormInput} />
                                        </div>
                                        {meta.error && meta.touched && <span className={styles.createEventError}>{meta.error}</span>}
                                    </Fragment>
                                )}
                            </Field>
                            <Field name="phone"
                                validate={composeValidators(minValue)} >
                                {({ input, meta }) => (
                                    <Fragment>
                                        <div className={styles.createEventFormField}>
                                            <label className={styles.createEventFormLabel}>
                                                <img src={PhoneIcon} alt="Phone icon" className={styles.createEventFormIcon} />
                                            </label>
                                            <input
                                                {...input}
                                                type="tel"
                                                pattern="^\d{9}$"
                                                placeholder="Numer kontaktowy"
                                                className={styles.createEventFormInput} />
                                        </div>
                                        {meta.error && meta.touched && <span className={styles.createEventError}>{meta.error}</span>}
                                    </Fragment>
                                )}
                            </Field>
                            <div className={styles.createEventFormField}>
                                <label className={styles.createEventFormLabel}>
                                    <img src={SportIcon} alt="sport icon" className={styles.createEventFormIcon} />
                                </label>
                                <Field
                                    name="sportEvent"
                                    component="select"
                                    className={styles.createEventFormInput}
                                    validate={composeValidators(required)}>
                                    <option value="Basen">Basen </option>
                                    <option value="Koszykówka">Koszykówka </option>
                                    <option value="Piłka nożna">Piłka nożna</option>
                                    <option value="Piłka ręczna">Piłka ręczna</option>
                                    <option value="Siatkówka">Siatkówka </option>
                                    <option value="Tenis">Tenis </option>
                                </Field>
                            </div>
                            <Field name="dateEvent">
                                {({ input, meta }) => (
                                    <div className={styles.createEventFormField}>
                                        <label className={styles.createEventFormLabel}>
                                            <img src={CalendarIcon} alt="calendar icon" className={styles.createEventFormIcon} />
                                        </label>
                                        <input
                                            {...input}
                                            type="text"
                                            className={styles.createEventFormInput}
                                            disabled
                                        />
                                    </div>
                                )}
                            </Field>
                            <div className={styles.createEventFormField}>
                                <label className={styles.createEventFormLabel}>
                                    <img src={TimeIcon} alt="time icon" className={styles.createEventFormIcon} />
                                </label>
                                <TimePicker
                                    className={styles.createEventFormInputTimeLeft}
                                    defaultValue={this.props.data.startTime}
                                    showSecond={false}
                                    allowEmpty={false}
                                    onChange={(value) => this.setStartTime(value)} />
                                <TimePicker
                                    className={styles.createEventFormInputTimeRight}
                                    defaultValue={this.props.data.endTime}
                                    showSecond={false}
                                    allowEmpty={false}
                                    onChange={(value) => this.setEndTime(value)} />
                            </div>
                            <Field name="describeEvent" >
                                {({ input, meta }) => (
                                    <div className={styles.createEventFormField}>
                                        <label className={styles.createEventFormLabel}>
                                            <img src={DescribeIcon} alt="describe icon" className={styles.createEventFormIcon} />
                                        </label>
                                        <textarea
                                            {...input}
                                            type="text"
                                            placeholder="Opis"
                                            className={styles.createEventFormInput} />
                                    </div>
                                )}
                            </Field>
                            <button
                                type="submit"
                                className={styles.createEventSubmitButton}
                                disabled={submitting}>
                                Utwórz wydarzenie
                            </button>
                        </form>
                    )}
                />

            </div>
        )
    }
}

export default CreateEventForm
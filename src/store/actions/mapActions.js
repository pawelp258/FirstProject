import * as actions from '../actions/actionTypes'
import fb from '../../config/fbConfig'


export const getObjects = () => {
    return (dispatch, getState) => {
        let array = [];

        fb.firestore().collection('obiekt').get()
        .then(snapshot => {
            snapshot.forEach(async doc => {
                let element = doc.data();
                let id = doc.id;
                element = {
                    ...element,
                    id
                }
                array.push(element)
            })
        }).then(() => {
            dispatch({
                type: actions.GET_OBJECTS_SUCCESS,
                array
            })
        }).catch((err) => {
            dispatch({
                type: actions.GET_OBJECTS_FAILED
            })
        })
    }
}

export const setSelectedItem = (item) => {
    return (dispatch, getState) => {
        dispatch({
            type: actions.SET_SELECTED_ITEM_SUCCESS,
            item
        })
    }
}

export const setCity = (new_city) => {
    return (dispatch, getState) => {
        dispatch({
            type: actions.SET_CITY,
            city: new_city
        })
    }
}

export const setFilters = (el, key, old_filters) => {
    const filters = {
        ...old_filters,
        [key]: { 
          ...old_filters[key],
          active: !old_filters[key].active
        }
      };
    return (dispatch, getState) => {
        dispatch({
            type: actions.SET_FILTERS,
            filters: filters
        })
    }
}

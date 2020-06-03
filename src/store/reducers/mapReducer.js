import * as actions from '../actions/actionTypes'

    const initState = {
        filters: {
            basen: {
                active: true,
                name: 'BASEN',
                events_name: "Basen"
            },
            koszykowka: {
                active: true,
                name: 'KOSZYKÓWKA',
                events_name: "Koszykówka"
            },
            pilka_nozna: {
                active: true,
                name: 'PIŁKA NOŻNA',
                events_name: "Piłka nożna"
            },
            pilka_reczna: {
                active: true,
                name: 'PIŁKA RĘCZNA',
                events_name: "Piłka ręczna"
            },
            siatkowka: {
                active: true,
                name: 'SIATKÓWKA',
                events_name: "Siatkówka"
            },
            tenis: {
                active: true,
                name: 'TENIS',
                events_name: "Tenis"
            }
        },
    selectedObject: null,
    objectsMap: [],
    city: {
        name: 'Toruń',
        coords: { lat: 53.01, lng: 18.61 }
    }
}

const mapReducer = (state = initState, action) => {
    switch(action.type) {
        case actions.GET_OBJECTS_SUCCESS:
            return({
                ...state,
                objectsMap: action.array
            })
        case actions.GET_OBJECTS_FAILED:
            return({
                ...state
            })
        case actions.SET_FILTERS:
            return({
                ...state,
                filters: action.filters
            })
        case actions.SET_CITY:
            return({
                ...state,
                city: action.city
            })
        case actions.SET_SELECTED_ITEM_SUCCESS:
            return({
                ...state, 
                selectedObject: action.item
            })
        case actions.SET_SELECTED_ITEM_FAILED:
            return({
                ...state
            })
        default:
            return state;
    }
}

export default mapReducer;




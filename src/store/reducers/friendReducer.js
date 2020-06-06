import * as actions from '../actions/actionTypes'

const initState = {
    selectedFriend: null
}

const friendReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SELECTED_FRIEND_SUCCESS:
            return ({
                ...state,
                selectedFriend: action.friend_id
            })
        default:
            return state;
    }
}

export default friendReducer
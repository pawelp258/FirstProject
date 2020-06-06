import * as actions from '../actions/actionTypes'

export const setFriend = (friend_id) => {
    return (dispatch, getState) => {
        dispatch({
            type: actions.SELECTED_FRIEND_SUCCESS,
            friend_id
        })
    }
}
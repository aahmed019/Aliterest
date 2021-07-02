
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const default_state = {
    id: null
}

const sessionReducer = (state = default_state, action) => {
    Object.freeze(state)

    const newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState.id = action.user.id
            return newState
        case LOGOUT_CURRENT_USER:
            return default_state
        default:
            return state;
    }
}

export default sessionReducer
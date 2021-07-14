import { RECEIVE_RESERVATION, RECEIVE_RESERVATIONS, REMOVE_RESERVATION } from "../actions/reservation_actions"

const reservationReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            return action.reservations
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, {[action.reservation.id] : action.reservation})
        case REMOVE_RESERVATION:
            delete newState[action.reservationId]
            return newState
        default:
            return state;
    }
}

export default reservationReducer
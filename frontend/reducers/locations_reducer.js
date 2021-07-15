import { CLEAR_LOCATIONS, RECEIVE_LOCATION, RECEIVE_LOCATIONS } from "../actions/location_actions";

const locationReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
    case RECEIVE_LOCATIONS:
        return action.locations
    case RECEIVE_LOCATION:
        return {[action.location.id]: action.location}
        // const newState = {[action.location.id]: action.location}
        // return Object.assign({}, state, newState)
    case CLEAR_LOCATIONS:
        return {}
    default:
        return state;
    }
}
export default locationReducer;
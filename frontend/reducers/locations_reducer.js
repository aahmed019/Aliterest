import { RECEIVE_LOCATION, RECEIVE_LOCATIONS } from "../actions/location_actions";

const locationReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
    case RECEIVE_LOCATIONS:
        return action.locations
    case RECEIVE_LOCATION:
        return action.location
    default:
        return state;
    }
}
  
export default locationReducer;
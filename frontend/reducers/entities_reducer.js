import { combineReducers } from "redux";
import locationReducer from "./locations_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    locations: locationReducer
})

export default entitiesReducer
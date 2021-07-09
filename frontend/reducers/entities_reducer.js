import { combineReducers } from "redux";
import locationReducer from "./locations_reducer";
import usersReducer from "./users_reducer";
import reviewReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    locations: locationReducer,
    reviews: reviewReducer
})

export default entitiesReducer
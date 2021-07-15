import { UPDATE_FILTER, CLEAR_FILTER } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
    amenity: "Shower",
})

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);

    switch(action.type) {
        case UPDATE_FILTER:

            const newState = {[action.filter]: action.value}
            return Object.assign({}, state, newState)

        case CLEAR_FILTER:
            return defaultFilters

        default:
            return state;
    }
}

export default filtersReducer
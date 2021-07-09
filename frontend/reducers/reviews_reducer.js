import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_action"

const reviewReducer = (state = {}, action) => {
    Object.freeze(state)

    const newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_REVIEW:
            return action.reviews
        case REMOVE_REVIEW:
            delete newState[action.review.id]
        default:
            return state;
    }
}

export default reviewReducer
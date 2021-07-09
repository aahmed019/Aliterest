import * as ReviewUtil from '../util/review'

export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const CREATE_REVIEW = "CREATE_REVIEW"
export const UPDATE_REVIEW = "UPDATE_REVIEW"
export const REMOVE_REVIEW = "REMOVE_REVIEW"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"

const receiveReview = (review) => ({
    type: RECEIVE_CURRENT_USER,
    review
})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})



export const getReviews = locationId => dispatch => {
    return ReviewUtil.getReviews(locationId)
        .then(
            review => dispatch(receiveReview(review)),
            errors => dispatch(receiveErrors(errors.responseJSON))
            )
}

export const createReview = formData => dispatch => {
    return ReviewUtil.createReview(formData)
        .then(
            review => dispatch(receiveReview(review)),
            errors => dispatch(receiveErrors(errors.responseJSON))
            )
}

export const updateReview = formData => dispatch => {
    return ReviewUtil.updateReview(formData)
        .then(
            review => dispatch(receiveReview(review)),
            errors => dispatch(receiveErrors(errors.responseJSON))
            )
}

export const deleteReview = review_id => dispatch => {
    return ReviewUtil.deleteReview(review_id).then(
        () => dispatch(removeReview(review_id)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const removeErrors = () => dispatch => dispatch(receiveErrors([]))
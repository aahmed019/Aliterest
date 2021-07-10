import * as ReviewUtil from '../util/review'

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const UPDATE_REVIEW = "UPDATE_REVIEW"
export const REMOVE_REVIEW = "REMOVE_REVIEW"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
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
            review => dispatch(receiveReviews(review)),
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
            review =>  dispatch(receiveReview(review)),
            )
}

export const deleteReview = review_id => dispatch => {
    return ReviewUtil.deleteReview(review_id).then(
        () => dispatch(removeReview(review_id)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const removeErrors = () => dispatch => dispatch(receiveErrors([]))
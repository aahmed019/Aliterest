import * as ReservationUtil from '../util/reservations'

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS"
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION"
export const REMOVE_RESERVATION = "REMOVE_RESERVATION"
export const RECEIVE_ERRORS = "RECEIVE_RESERVATION_ERRORS"

const receiveReservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

const receiveReservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation
})


const removeReservation = (reservationId) => ({
    type: REMOVE_RESERVATION,
    reservationId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const createReservation = formData => dispatch => {
    // debugger
    return ReservationUtil.createReservation(formData)
        .then(
            reservation =>  dispatch(receiveReservation(reservation)),
            errors => dispatch(receiveErrors(errors.responseJSON))
            )
}

export const updateReservation = formData => dispatch => {
    return ReservationUtil.updateReservation(formData)
        .then(
            reservation =>  dispatch(receiveReservation(reservation)),
            )
}

export const deleteReservation = review_id => dispatch => {
    return ReviewUtil.deleteReview(review_id).then(
        () => dispatch(removeReservation(review_id)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const removeErrors = () => dispatch => dispatch(receiveErrors([]))
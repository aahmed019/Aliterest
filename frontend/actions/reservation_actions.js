import * as ReservationUtil from '../util/reservations'

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS"
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION"
export const REMOVE_RESERVATION = "REMOVE_RESERVATION"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const CLEAR_RESERVATIONS = "CLEAR_RESERVATIONS"

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

export const fetchReservations = () => dispatch => (
    ReservationUtil.fetchReservations().then(reservations => dispatch(receiveReservations(reservations)))
)

export const fetchReservation = (id) => dispatch => (
    ReservationUtil.fetchReservation(id).then(reservations => dispatch(receiveReservations(reservations)))
)

export const clearReservation = () => ({
    type: CLEAR_RESERVATIONS,
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
            reservation => dispatch(receiveReservation(reservation)),
            )
}

export const deleteReservation = review_id => dispatch => {
    return ReservationUtil.deleteReservation(review_id).then(
        () => dispatch(removeReservation(review_id)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const clearReservations = () => dispatch => {
    dispatch(clearReservation())
}

export const removeErrors = () => dispatch => dispatch(receiveErrors([]))
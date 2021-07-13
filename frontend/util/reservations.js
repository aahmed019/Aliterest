export const fetchReservations = () => (
    $.ajax({
        url: 'api/reservations'
    })
)

export const fetchReservation = (id) => (
    $.ajax({
        url: `api/reservations/${id}`
    })
)

export const createReservation = reservation => (
    $.ajax({
        method: 'POST',
        url: `api/reservations`,
        data: {reservation}
    })
)

export const updateReservation = reservation => (
    $.ajax({
        method: "PATCH",
        url: `/api/reservation/${reservation}`,
        data: {reservation}
    })
)

export const deleteReservation = id => (
    $.ajax({
        method: "DELETE",
        url: `/api/Reservations/${id}`
    })
)
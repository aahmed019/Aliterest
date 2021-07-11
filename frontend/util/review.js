export const getReviews = location_id => (
    $.ajax({
        url: `api/reviews/${location_id}`,
    })
)

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: `api/reviews`,
        data: {review}
    })
)

export const updateReview = review => (
    $.ajax({
        method: "PATCH",
        //broken here
        url: `/api/reviews/${review}`,
        data: {review}
    })
)

export const deleteReview = id => (
    $.ajax({
        method: "DELETE",
        url: `/api/reviews/${id}`
    })
)
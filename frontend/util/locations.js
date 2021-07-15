export const getLocations = data => (
    $.ajax({
        url: "/api/locations",
        data
    })
)

export const getLocation = locationId => (
    $.ajax({
        url: `/api/locations/${locationId}`
    })
)
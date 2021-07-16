export const getLocations = data => {
    return $.ajax({
        url: "/api/locations",
        data
    })
}

export const getLocation = locationId => (
    $.ajax({
        url: `/api/locations/${locationId}`
    })
)
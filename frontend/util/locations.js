export const getLocations = () => (
    $.ajax({
        url: "/api/locations",
    })
)

export const getLocation = locationId => (
    $.ajax({
        url: `/api/locations/${locationId}`
    })
)

export const getLocations = data => {
    console.log(data)
    // debugger
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
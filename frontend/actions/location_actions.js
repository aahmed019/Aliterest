import * as LocationUtil from '../util/locations'

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION'
export const CLEAR_LOCATIONS = 'CLEAR_LOCATIONS'

const receiveLocations = locations => ({
    type: RECEIVE_LOCATIONS,
    locations
})

const receiveLocation = location => ({
    type: RECEIVE_LOCATION,
    location
})

export const clearLocation = () => ({
    type: CLEAR_LOCATIONS,
})

export const getLocations = (filters) => dispatch => LocationUtil.getLocations(filters)
.then(
    locations => dispatch(receiveLocations(locations)))

export const getLocation = locationId => dispatch => LocationUtil.getLocation(locationId)
.then(
    location => dispatch(receiveLocation(location)))

export const clearLocations = () => dispatch => {
    dispatch(clearLocation())
}


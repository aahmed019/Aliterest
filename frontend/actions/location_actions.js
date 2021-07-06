import * as LocationUtil from '../util/locations'

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION'

const receiveLocations = locations => ({
    type: RECEIVE_LOCATIONS,
    locations
})

const receiveLocation = location => ({
    type: RECEIVE_LOCATION,
    location
})

export const getLocations = () => dispatch => LocationUtil.getLocations()
.then(
    locations => dispatch(receiveLocations(locations)))

export const getLocation = locationId => dispatch => LocationUtil.getLocation(locationId)
.then(
    location => dispatch(receiveLocation(location)))


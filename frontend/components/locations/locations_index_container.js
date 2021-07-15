import { connect } from "react-redux";
import { clearLocations, getLocations } from "../../actions/location_actions";
import LocationsIndex from "./locations_index";


const mSTP = ({entities, ui: {filters}}) => ({
    locations: Object.values(entities.locations),
    filters
})

const mDTP = dispatch => ({
    fetchLocations: (filters) => dispatch(getLocations(filters)),
    clearLocations: () => dispatch(clearLocations())
})

export default connect(mSTP, mDTP)(LocationsIndex)


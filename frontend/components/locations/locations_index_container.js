import { connect } from "react-redux";
import { getLocations } from "../../actions/location_actions";
import LocationsIndex from "./locations_index";

const mSTP = ({entities}) => ({
    locations: Object.values(entities.locations)
})

const mDTP = dispatch => ({
    fetchLocations: () => dispatch(getLocations())
})

export default connect(mSTP, mDTP)(LocationsIndex)


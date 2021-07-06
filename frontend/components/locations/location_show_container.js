import { connect } from "react-redux";
import { getLocation } from "../../actions/location_actions";
import LocationShow from "./location_show";

const mSTP = ({entities}, ownProps) => ({
    location: entities.locations[ownProps.match.params.locationId],
    locationId: parseInt(ownProps.match.params.locationId)
})

const mDTP = dispatch => ({
    fetchLocation: id => dispatch(getLocation(id))
})

export default connect(mSTP, mDTP)(LocationShow)


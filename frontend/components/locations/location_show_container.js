import { connect } from "react-redux";
import { clearLocations, getLocation } from "../../actions/location_actions";
import LocationShow from "./location_show";

const mSTP = ({entities, session}, ownProps) => ({
    location: entities.locations[ownProps.match.params.locationId],
    ownProps,
    currentUser: entities.users[session.id]
})

const mDTP = dispatch => ({
    fetchLocation: id => dispatch(getLocation(id)),
    clearLocations: () => dispatch(clearLocations())
})

export default connect(mSTP, mDTP)(LocationShow)


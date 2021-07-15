import { connect } from "react-redux";
import { getLocations } from "../../actions/location_actions";
import Map from "./map";

const mSTP = ({entities, session}, ownProps) => ({
    locations: Object.values(entities.locations),
})

const mDTP = dispatch => ({
    fetchLocations: () => dispatch(getLocations())
})

export default connect(mSTP, mDTP)(Map)


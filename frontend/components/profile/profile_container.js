import { connect } from "react-redux";
import { deleteReservation, fetchReservation, fetchReservations } from "../../actions/reservation_actions";
import Profile from "./profile";


const mSTP = (state) => ({
    reservations: Object.values(state.entities.reservations),
    currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    fetchReservations: () => dispatch(fetchReservations()),
    fetchReservation: (user_id) => dispatch(fetchReservation(user_id)),
    deleteReservation: (id) => dispatch(deleteReservation(id))
})

export default connect(mSTP, mDTP)(Profile)


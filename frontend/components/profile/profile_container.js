import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { deleteReservation, fetchReservation, fetchReservations, updateReservation, clearReservations } from "../../actions/reservation_actions";
import Profile from "./profile";


const mSTP = (state) => {
    // debugger
    return(
    {
        reservations: Object.values(state.entities.reservations),
    currentUser: state.entities.users[state.session.id]
})}

const mDTP = dispatch => ({
    fetchReservations: () => dispatch(fetchReservations()),
    updateReservation: (form) => dispatch(updateReservation(form)),
    fetchReservation: (user_id) => dispatch(fetchReservation(user_id)),
    deleteReservation: (id) => dispatch(deleteReservation(id)),
    openModal: (modalType, props) => dispatch(openModal(modalType, props)),
    closeModal: () => dispatch(closeModal()),
    clearReservations: () => dispatch(clearReservations())
})

export default connect(mSTP, mDTP)(Profile)


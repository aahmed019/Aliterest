import { connect } from "react-redux";
import { createReservation } from '../../actions/reservation_actions';

import ReservationForm from "./reservation_form";

const mSTP = (state) => ({
    reservation: {
        start_date: null,
        end_date: null,
        guest_amount: 1,
        user_id: state.session.id, 
    },
    currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    createReservation: (formData) => dispatch(createReservation(formData))
})

export default connect(mSTP, mDTP)(ReservationForm)
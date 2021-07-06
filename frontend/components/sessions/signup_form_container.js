import React from "react";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_action";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({errors}) => ({
    errors: errors.session,
    information: {
        email: "",
        password: "",
        f_name: "",
        l_name: ""
    },
    formType: "Sign Up",
})

const mDTP = dispatch => ({
    authAction: user => dispatch(signup(user)),
    otherModal: (
        <button onClick ={() => dispatch(openModal('login'))}>Login</button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm)
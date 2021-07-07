import React from "react";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({errors}) => ({
    errors: errors.session,
    information: {
        email: "",
        password: "",
    },
    formType: "Login",
})

const mDTP = dispatch => ({
    authAction: user => dispatch(login(user)),
    otherModal: (
        <a onClick ={() => dispatch(openModal('signup'))}>Sign Up</a>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm)

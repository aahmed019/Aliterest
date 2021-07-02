import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({errors}) => ({
    errors: errors.session,
    information: {
        email: "",
        password: "",
    },
    formType: "Login",
    altLink: <Link to="/signup">Sign Up</Link>
})

const mDTP = dispatch => ({
    authAction: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm)

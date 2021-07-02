import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({errors}) => ({
    errors: errors.session,
    information: {
        email: "",
        password: ""
    },
    formType: "Sign Up",
    altLink: <Link to="/login">Login</Link>
})

const mDTP = dispatch => ({
    authAction: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm)
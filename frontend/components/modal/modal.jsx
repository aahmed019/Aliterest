import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import EditReview from '../reviews/edit_review'
import LoginFormContainer from "../sessions/login_form_container"
import SignupFormContainer from "../sessions/signup_form_container"


const Modal = ({modal, closeModal}) =>{
    if (!modal) {
        return null;
      }
      let component;
      switch (modal.type) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'edit_review':
            component = <EditReview review = {modal.props}/>;
            break;
        default:
          return null;
      }
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            { component }
          </div>
        </div>
      );
}

const mSTP = state => ({
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal)
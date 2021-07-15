import React from "react";
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from "react-redux";
import { getReviews, createReview, updateReview, deleteReview, removeErrors } from "../../actions/review_action";
import ReviewForm from "./review_form";

const mSTP = (state) => ({
    reviews: Object.values(state.entities.reviews),
    review: {
        body: "",
        author_id: state.session.id,
    },
    currentUser: state.entities.users[state.session.id],
    formType: "Create Review"
})

const mDTP = dispatch => ({
    fetchReviews: (locationId) => dispatch(getReviews(locationId)),
    postReview: (formData) => dispatch(createReview(formData)),
    patchReview: (formData) => dispatch(updateReview(formData)),
    removeReview: (reviewId) => dispatch(deleteReview(reviewId)),
    removeErrors: () => dispatch(removeErrors()),
    openModal: (modalType, props) => dispatch(openModal(modalType, props)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(ReviewForm)


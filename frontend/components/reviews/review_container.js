import React from "react";
import { connect } from "react-redux";
import { getReviews, createReview, updateReview, deleteReview, removeErrors } from "../../actions/review_action";
import ReviewForm from "./review_form";

const mSTP = (state, ownProps) => ({
    reviews: Object.values(state.entities.reviews),
    review: {
        title: "",
        body: "",
        author_id: state.session.id,
    },
    formType: "Create Review"
})

const mDTP = dispatch => ({
    fetchReviews: (locationId) => dispatch(getReviews(locationId)),
    postReview: (formData) => dispatch(createReview(formData)),
    patchReview: (formData) => dispatch(updateReview(formData)),
    removeReviews: (reviewId) => dispatch(deleteReview(reviewId)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(ReviewForm)

//state.entities.review[ownProps.match.params.reviewId]
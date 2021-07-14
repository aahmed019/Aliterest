import React from 'react'

export default class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.newState = Object.assign({}, this.props.review)
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.locationId)
    }

    handleSubmit(e){
        e.preventDefault()
        const review = Object.assign({}, this.state, {location_id: this.props.locationId}, {author_id: this.props.currentUser.id});
        this.props.postReview(review)
        this.setState(this.newState)
    }

    updateInput(field){
        return e => this.setState({[field]: e.target.value})
    }

    render(){
        const {patchReview} = this.props
        const {closeModal} = this.props
        const reviews = this.props.reviews.map((review) => (
            <div key ={review.id} className = "review">
                <div className ="user-photo">
                <img
                        src={review.user_photo}
                        style={{ borderRadius: "50%", width:'100px', height:'100px' }}
                    />
                    <p>{review.f_name} {review.l_name} </p>
                </div>
                <div className="review-body">
                    <p>{review.body}</p>
                </div>
                <div className="review-buttons">
                    <div>
                        <button
                        className="edit"
                        onClick={() => this.props.openModal('edit_review', Object.assign({}, review, {patchReview: patchReview}, {closeModal: closeModal})) }
                        style={{display: this.props.currentUser ? review.author_id === this.props.currentUser.id ? 'block' : 'none' : 'none'}}
                        >
                        Edit
                        </button>
                    </div>

                    <div>
                        <button
                        className="delete"
                        onClick={() => this.props.removeReview(review.id) }
                        style={{display: this.props.currentUser ? review.author_id === this.props.currentUser.id ? 'block' : 'none' : 'none'}}
                        >Delete
                        </button>
                    </div>
                </div>
            </div>
        ))
        return(
            <div className ="review-container">
                {reviews}
            
                <form onSubmit={this.handleSubmit} className="form" style={{display: this.props.currentUser === undefined ? 'none' : 'block' }}>

                    <div>
                        <textarea type="text" className="reviewInput"
                        value ={this.state.body}
                        placeholder="type out your review here..."
                        onChange = {this.updateInput('body')}
                        />

                        <br />
                        <br />
                        <button className="formButton">{this.props.formType}</button>
                    </div>
                </form>
            </div>
        )
    }
}
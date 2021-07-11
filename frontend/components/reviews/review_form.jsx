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
        const review = Object.assign({}, this.state, {location_id: this.props.locationId});
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
                        src="https://picsum.photos/100"
                        style={{ borderRadius: "50%" }}
                    />
                    <p>{review.f_name} {review.l_name} </p>
                </div>
                <div className="review-body">
                    <p>{review.body}</p>
                </div>
                <button 
                onClick={() => this.props.removeReview(review.id) }
                style={{display: review.author_id === this.state.author_id ? 'block' : 'none' }}
                >Delete Review
                </button>

                <button 
                onClick={() => this.props.openModal('edit_review', Object.assign({}, review, {patchReview: patchReview}, {closeModal: closeModal})) }
                style={{display: review.author_id === this.state.author_id ? 'block' : 'none' }}
                >
                Edit Review
                </button>
            </div>
        ))
        return(
            <div className ="review-container">
                {reviews}
            
                <form onSubmit={this.handleSubmit} className="form">

                    <div>
                        <input type="text" className="sessionInput"
                        value ={this.state.body}
                        placeholder="type out your review here..."
                        onChange = {this.updateInput('body')}
                        />

                        <br />
                        <br />

                        <button className="formButton">{this.props.formType}</button>
                        <br />
                        <br />
                    </div>
                </form>
            </div>
        )
    }
}